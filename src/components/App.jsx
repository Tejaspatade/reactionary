import React from "react";

import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartPage from "./StartPage";
import Question from "./Question";
import NextButton from "./NextButton";
import ProgressBar from "./ProgressBar";
import FinishPage from "./FinishPage";
import Footer from "./Footer";
import Timer from "./Timer";
import { useQuestions } from "../context/QuestionsContext";
// import Login from "./Login";

const App = () => {
	// Consuming Context from QuestionsProvider with custom hook
	const { status } = useQuestions();

	return (
		<div className="app">
			{/* <Login /> */}
			<Header />
			<Main>
				{status === "loading" && <Loader />}
				{status === "error" && <Error />}
				{status === "ready" && <StartPage />}
				{status === "active" && (
					<>
						<ProgressBar />
						<Question />
						<Footer>
							<Timer />
							<NextButton />
						</Footer>
					</>
				)}
				{status === "finished" && <FinishPage />}
			</Main>
		</div>
	);
};

export default App;
