import React from "react";
import { useQuestions } from "../context/QuestionsContext";

const NextButton = () => {
	// Consuming Context from QuestionsProvider with custom hook
	const { dispatch, currAns: answer, index, numQuestions } = useQuestions();

	// Conditional Rendering
	if (answer === null) return null;

	if (index < numQuestions - 1)
		return (
			<button
				className="btn btn-ui"
				onClick={() => {
					dispatch({ type: "nextQuestion" });
				}}
			>
				Next
			</button>
		);

	if (index === numQuestions - 1)
		return (
			<button
				className="btn btn-ui"
				onClick={() => {
					dispatch({ type: "finishQuiz" });
				}}
			>
				Finish Quiz 🤓
			</button>
		);
};

export default NextButton;
