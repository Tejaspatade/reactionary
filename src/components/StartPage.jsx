import React from "react";
import { useQuestions } from "../context/QuestionsContext";

const StartPage = () => {
	// Consuming Context from QuestionsProvider with custom hook
	const { numQuestions, dispatch } = useQuestions();

	return (
		<div className="start">
			<h2>Are You Ready For A Quiz?</h2>
			<h3>{numQuestions} Questions to test Your React Knowledge</h3>
			<button
				className="btn btn-ui"
				onClick={() => dispatch({ type: "start" })}
			>
				Let's Go
			</button>
		</div>
	);
};

export default StartPage;
