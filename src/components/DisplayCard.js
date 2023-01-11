import React, { useState } from "react";
import Fact from "./Fact";

export default function ({ handleLoadingState }) {
	const [catFact, setCatFact] = useState("Click button to generate a random cat fact...");
	const [isLoading, setIsLoading] = useState(false);

	async function getFact() {
		setIsLoading(true);

		const response = await fetch("https://catfact.ninja/fact?max_length=140", {
			method: "GET",
			mode: "cors"
		});
		const facts = await response.json();
		setCatFact(facts.fact);

		setIsLoading(false);
	}

	return (
		<div className="w-2/4 m-auto ">
			{isLoading ? <h1>Loading...</h1> : <Fact getFact={getFact} fact={catFact} />}
		</div>
	);
}
