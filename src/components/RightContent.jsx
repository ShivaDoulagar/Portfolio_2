import React from "react";
import Navbar from "./Navbar";

const RightContent = () => {
	return (
		<div className="flex h-[80vh]   justify-center items-center w-[90%] mx-auto  p-2 md:p-1  ">
			<main className="flex-1  rounded-xl shadow-2xl shadow-gray-700  flex p-2 bg-white h-full hidden md:block">
				<Navbar />
			</main>
		</div>
	);
};

export default RightContent;
