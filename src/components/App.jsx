import React, { useEffect, useReducer } from "react";

import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartPage from "./StartPage";

const reducer = (state, action) => {
	switch (action.type) {
		case "dataRecieved":
			return { ...state, questions: action.payload, status: "ready" };
		case "dataFailed":
			return { ...state, status: "error" };
		default:
			throw new Error("Invalid Type of Action!");
	}
};

const initialState = {
	questions: [],
	// loading, ready, active, error, finished
	status: "loading",
};

const App = () => {
	const [{ questions, status }, dispatch] = useReducer(reducer, initialState);

	const numQuestions = questions.length;

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
					<StartPage numQuestions={numQuestions} />
				)}
			</Main>
		</div>
	);
};

export default App;
