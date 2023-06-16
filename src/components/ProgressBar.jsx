import React from "react";

const ProgressBar = ({ index, numQuestions, score, totalPoints, answer }) => {
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
