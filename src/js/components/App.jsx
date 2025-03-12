import React, { useState, useEffect, useRef } from "react";
import Title from "./Title";
import Counter from "./Counter";
import StopButton from "./buttons/StopButton";
import ResumeButton from "./buttons/ResumeButton";
import RestartButton from "./buttons/RestartButton";


const App = () => {
	const [count, setCount] = useState(0);
	const [isRunning, setIsRunning] = useState(true);
	const intervalRef = useRef(null);

	useEffect(() => {
		if (isRunning) {
			intervalRef.current = setInterval(() => {
				setCount((prevCount) => prevCount + 1);
			}, 1000);
		} else {
			clearInterval(intervalRef.current);
		}
		return () => clearInterval(intervalRef.current);
	}, [isRunning]);

	const handleStop = () => {
		setIsRunning(false);
	};

	const handleResume = () => {
		setIsRunning(true);
	};

	const handleRestart = () => {
		setCount(0);
		setIsRunning(true);
	};

	return (
		<div className="container-flex">
			<Title />
			<Counter count={count} />
			<div className="row justify-content-center py-5">
				<StopButton onStop={handleStop} />
				<ResumeButton onResume={handleResume} />
				<RestartButton onRestart={handleRestart} />
			</div>
		</div>
	);
};

export default App;