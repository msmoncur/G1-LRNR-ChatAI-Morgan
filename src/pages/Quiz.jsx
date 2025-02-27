import React, { useState, useRef, useEffect } from "react";
import Question from "../components/Question";
import "@dotlottie/player-component/dist/dotlottie-player";
// import 'tailwindcss/tailwind.css';

export default function Quiz() {
	const [topic, setTopic] = useState("golang");
	const [expertise, setExpertise] = useState("Beginner");
	const [numQuestions, setNumQuestions] = useState("5");
	const [style, setStyle] = useState("Master Oogway");
	const [questions, setQuestions] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log({ topic, expertise, numQuestions, style });

		return fetch("https://g1-lrnr-chatai.onrender.com/api/questions", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
			},
			body: JSON.stringify({ topic, expertise, numQuestions, style }),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setQuestions(data.questions);
			});
	};

	const [loading, setLoading] = useState(false);

	return (
		<main className="container p-4 min-h-[80vh] h-full w-full flex justify-center items-center">
			<div className="w-full w-auto">
				{questions.length === 0 ? (
					<form
						className="space-y-6"
						onSubmit={(e) => {
							setLoading(true);
							handleSubmit(e).finally(() => setLoading(false));
						}}
					>
						<h1 className="text-3xl font-bold mb-4 text-left">
							Quiz Generation Options
						</h1>
						<p className="mb-4 text-left">
							Please choose your preferences below to generate your personalized
							quiz
						</p>
						// Update your form labels in Quiz.jsx to include htmlFor attribute:

						<div>
							<label htmlFor="topic" className="block mb-2 text-gray-400 text-left">
								Topic
							</label>
							<select
								id="topic"
								value={topic}
								onChange={(e) => setTopic(e.target.value)}
								className="w-full p-2 border-b-2 border-teal-600 rounded-none"
								disabled={loading}
							>
								{/* Options remain the same */}
							</select>
						</div>

						<div>
							<label htmlFor="expertise" className="block mb-2 text-gray-400 text-left">
								Expertise
							</label>
							<select
								id="expertise"
								value={expertise}
								onChange={(e) => setExpertise(e.target.value)}
								className="w-full p-2 border-b-2 border-teal-600 rounded-none"
								disabled={loading}
							>
								{/* Options remain the same */}
							</select>
						</div>

						<div>
							<label htmlFor="numQuestions" className="block mb-2 text-gray-400 text-left">
								Number of Questions
							</label>
							<select
								id="numQuestions"
								value={numQuestions}
								onChange={(e) => setNumQuestions(e.target.value)}
								className="w-full p-2 border-b-2 border-teal-600 rounded-none"
								disabled={loading}
							>
								{/* Options remain the same */}
							</select>
						</div>

						<div>
							<label htmlFor="style" className="block mb-2 text-gray-400 text-left">
								Style of Questions
							</label>
							<select
								id="style"
								value={style}
								onChange={(e) => setStyle(e.target.value)}
								className="w-full p-2 border-b-2 border-teal-600 rounded-none"
								disabled={loading}
							>
								{/* Options remain the same */}
							</select>
						</div>
						{loading ? (
							<dotlottie-player
								src="https://lottie.host/e3e5aeca-f9cb-4daf-ab3d-4d9b98980c23/qyAeM5XqX1.lottie"
								background="transparent"
								speed="1"
								style={{ width: "300px", height: "300px" }}
								loop
								autoplay
							></dotlottie-player>
						) : (
							<button
								type="submit"
								className="bg-teal-600 text-white font-medium py-3 px-4 rounded w-full sm:w-auto cursor-pointer"
								disabled={loading}
							>
								Submit
							</button>
						)}
					</form>
				) : (
					<Question questions={questions} />
				)}
			</div>
		</main>
	);
}
