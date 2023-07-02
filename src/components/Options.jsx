import React from "react";
import { useQuestions } from "../context/QuestionsContext";

const Options = ({ question }) => {
	// Consuming Context from QuestionsProvider with custom hook
	const { answer, dispatch } = useQuestions();

	// Derived State
	const hasAnswered = answer !== null;

	return (
		<div className="options">
			{question.options.map((op, i) => (
				<button
					className={`btn btn-option ${
						answer === i ? "answer" : ""
					} ${
						hasAnswered
							? i === question.correctOption
								? "correct"
								: "wrong"
							: ""
					}`}
					key={op}
					disabled={hasAnswered}
					onClick={() => {
						dispatch({ type: "newAnswer", payload: i });
					}}
				>
					{op}
				</button>
			))}
		</div>
	);
};

export default Options;
