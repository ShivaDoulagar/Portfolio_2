import React from "react";

const Heading1 = ({ word }) => {
	return (
		<div>
			<h1 className=" md:text-3xl text-2xl font-bold text-center">
				{word}
			</h1>
		</div>
	);
};

export default Heading1;
