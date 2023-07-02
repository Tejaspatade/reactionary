import React from "react";

import Options from "./Options";
import { useQuestions } from "../context/QuestionsContext";

const Question = () => {
	// Consuming Context from QuestionsProvider with custom hook
	const { questions, index } = useQuestions();
	const question = questions.at(index);

	return (
		<div>
			<h4>{question.question}</h4>
			<Options question={question} />
		</div>
	);
};

export default Question;
