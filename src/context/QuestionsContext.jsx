import { createContext, useContext, useEffect, useReducer } from "react";
import { collection, getDocs } from "firebase/firestore";
import { store } from "../config/firebase";

// Context API
const QuestionsContext = createContext();

const secsPerQ = 10;

// Reducer
const initialState = {
	questions: [],
	index: 0,
	answer: null,
	score: 0,
	highscore: 0,
	secondsRemaining: null,
	// loading, ready, active, error, finished
	status: "loading",
};

const reducer = (state, action) => {
	switch (action.type) {
		case "dataRecieved":
			return { ...state, questions: action.payload, status: "ready" };
		case "dataFailed":
			return { ...state, status: "error" };
		case "start":
			return {
				...state,
				status: "active",
				secondsRemaining: state.questions.length * secsPerQ,
			};
		case "newAnswer":
			const question = state.questions.at(state.index);
			return {
				...state,
				answer: action.payload,
				score:
					action.payload === question.correctOption
						? question.points + state.score
						: state.score,
			};
		case "nextQuestion":
			return { ...state, index: state.index + 1, answer: null };
		case "finishQuiz":
			return {
				...state,
				status: "finished",
				highscore:
					state.score > state.highscore
						? state.score
						: state.highscore,
			};
		case "restartQuiz":
			return {
				...initialState,
				status: "ready",
				questions: state.questions,
			};
		case "tick":
			return {
				...state,
				secondsRemaining: state.secondsRemaining - 1,
				status:
					state.secondsRemaining === 0 ? "finished" : state.status,
			};
		default:
			throw new Error("Invalid Type of Action!");
	}
};

// Firestore collection reference
const questionsCollectionRef = collection(store, "questions");

const QuestionsProvider = ({ children }) => {
	// Reducer for State
	const [state, dispatch] = useReducer(reducer, initialState);

	const {
		questions,
		status,
		index,
		answer,
		score,
		highscore,
		secondsRemaining,
	} = state;

	const numQuestions = questions.length;
	const totalPoints = questions.reduce((prev, curr) => prev + curr.points, 0);

	// Fetching data from dummy API as a side-effect on mount
	useEffect(() => {
		// Get movies from Firebase
		const getMovieList = async () => {
			try {
				const data = await getDocs(questionsCollectionRef);
				const filtered = data.docs.map((doc) => ({ ...doc.data() }));
				dispatch({ type: "dataRecieved", payload: filtered });
			} catch (err) {
				dispatch({ type: "dataFailed" });
			}
		};

		// Invoking async function
		getMovieList();
	}, []);

	return (
		<QuestionsContext.Provider
			value={{
				questions,
				numQuestions,
				status,
				index,
				answer,
				score,
				totalPoints,
				highscore,
				secondsRemaining,
				dispatch,
			}}
		>
			{children}
		</QuestionsContext.Provider>
	);
};

const useQuestions = () => {
	const values = useContext(QuestionsContext);

	if (values === undefined)
		throw new Error("Context was used outside it's provider.");

	return values;
};

export { QuestionsProvider, useQuestions };
