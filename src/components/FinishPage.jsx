import React from "react";
import { useQuestions } from "../context/QuestionsContext";

const FinishPage = () => {
	// Consuming Context from QuestionsProvider with custom hook
	const { score, totalPoints, highscore, dispatch } = useQuestions();

	// Derived State
	const percentage = (score / totalPoints) * 100;

	let emoji;
	if (percentage === 0) emoji = "🤦🏼‍♂️";
	if (percentage > 0) emoji = "😐";
	if (percentage > 50) emoji = "😏";
	if (percentage > 90) emoji = "🤓";

	return (
		<>
			<p className="result">
				{emoji} Your Scored <strong>{score}</strong> out of{" "}
				{totalPoints} points.(
				{Math.ceil(percentage)}%)
			</p>
			<p className="highscore">High-Score: {highscore}</p>
			<button
				className="btn btn-ui"
				onClick={() => {
					dispatch({ type: "restartQuiz" });
				}}
			>
				Try Again? 😏
			</button>
		</>
	);
};

export default FinishPage;
