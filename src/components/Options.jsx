import React from "react";
const Options = ({ question, answer, dispatch }) => {
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
