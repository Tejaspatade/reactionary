import React from "react";
const StartPage = ({ numQuestions }) => {
	return (
		<div className="start">
			<h2>Are You Ready For A Quiz?</h2>
			<h3>{numQuestions} Questions to test Your React Knowledge</h3>
			<button className="btn btn-ui">Let's Go</button>
		</div>
	);
};

export default StartPage;
