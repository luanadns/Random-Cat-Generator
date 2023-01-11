import React from "react";

export default function Fact({ fact, getFact }) {
	return (
		<div className="bg-slate-50  border rounded-md shadow-md h-48 flex flex-col justify-evenly items-center mt-10">
			<p className="text-slate-700 w-2/3">{fact}</p>
			<button onClick={getFact} className="bg-pink-500 p-2 rounded-md text-white w-1/2">
				Get New Cat Fact
			</button>
		</div>
	);
}
