import React, { useEffect, useReducer } from "react";

import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartPage from "./StartPage";
import Question from "./Question";
import NextButton from "./NextButton";
import ProgressBar from "./ProgressBar";
import FinishPage from "./FinishPage";
import Footer from "./Footer";
import Timer from "./Timer";

const secsPerQ = 10;

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

const App = () => {
	const [
		{
			questions,
			status,
			index,
			answer,
			score,
			highscore,
			secondsRemaining,
		},
		dispatch,
	] = useReducer(reducer, initialState);

	const numQuestions = questions.length;
	const totalPoints = questions.reduce((prev, curr) => prev + curr.points, 0);

	// Fetching data from dummy API as a side-effect on mount
	useEffect(() => {
		fetch("http://localhost:8000/questions")
			.then((res) => res.json())
			.then((data) => dispatch({ type: "dataRecieved", payload: data }))
			.catch((err) => dispatch({ type: "dataFailed" }));
	}, []);

	return (
		<div className="app">
			<Header />
			<Main>
				{status === "loading" && <Loader />}
				{status === "error" && <Error />}
				{status === "ready" && (
					<StartPage
						numQuestions={numQuestions}
						dispatch={dispatch}
					/>
				)}
				{status === "active" && (
					<>
						<ProgressBar
							index={index}
							numQuestions={numQuestions}
							score={score}
							totalPoints={totalPoints}
							answer={answer}
						/>
						<Question
							question={questions[index]}
							answer={answer}
							dispatch={dispatch}
						/>
						<Footer>
							<Timer
								dispatch={dispatch}
								secondsRemaining={secondsRemaining}
							/>
							<NextButton
								dispatch={dispatch}
								currAns={answer}
								index={index}
								numQuestions={numQuestions}
							/>
						</Footer>
					</>
				)}
				{status === "finished" && (
					<FinishPage
						score={score}
						totalPoints={totalPoints}
						highscore={highscore}
						dispatch={dispatch}
					/>
				)}
			</Main>
		</div>
	);
};

export default App;
