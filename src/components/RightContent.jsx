import React from "react";
import Navbar from "./Navbar";

const RightContent = () => {
	return (
		<div className="flex justify-center items-center w-[90%] mx-auto  p-2 md:p-10">
			<main className="flex-1  rounded-xl shadow-2xl shadow-gray-700  flex p-2 bg-white hidden md:block">
				<Navbar />
			</main>
		</div>
	);
};

export default RightContent;
