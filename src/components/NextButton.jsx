import React from "react";

const NextButton = ({ dispatch, currAns, index, numQuestions }) => {
	// Conditional Rendering
	if (currAns === null) return null;

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
