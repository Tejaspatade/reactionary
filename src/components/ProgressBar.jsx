import React from "react";
import { useQuestions } from "../context/QuestionsContext";

const ProgressBar = () => {
	// Consuming Context from QuestionsProvider with custom hook
	const { index, numQuestions, score, totalPoints, answer } = useQuestions();

	return (
		<header className="progress">
			<progress
				max={numQuestions}
				value={index + Number(answer !== null)}
			/>
			<p>
				Question <strong>{index + 1}</strong> / {numQuestions}
			</p>
			<p>
				<strong>{score}</strong> / {totalPoints}
			</p>
		</header>
	);
};

export default ProgressBar;
