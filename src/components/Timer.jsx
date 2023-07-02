import React, { useEffect } from "react";
import { useQuestions } from "../context/QuestionsContext";

const Timer = () => {
	// Consuming Context from QuestionsProvider with custom hook
	const { dispatch, secondsRemaining } = useQuestions();

	// Derived State
	const mins = Math.floor(secondsRemaining / 60);
	const seconds = secondsRemaining % 60;

	// Starting a Timer as a side-effect
	useEffect(() => {
		const id = setInterval(() => {
			dispatch({ type: "tick" });
		}, 1000);

		// Clean-Up
		return () => {
			clearInterval(id);
		};
	}, [dispatch]);

	return (
		<div className="timer">
			{mins < 10 && "0"}
			{mins}:{seconds}
		</div>
	);
};

export default Timer;
