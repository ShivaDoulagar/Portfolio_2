import React from "react";

const AboutMe = () => {
	return (
		<div>
			<h2 className="section-title text-blue-400 font-bold">
				<span className="prompt">$</span> whoami
			</h2>
			<p className="about-intro text-gray-800">
				I'm <b>Shiva</b>, a web developer based in Hyderabad who likes
				turning rough ideas into clean, working interfaces. I mostly
				build with <b>React</b> and <b>Node.js</b>, and I care a lot
				about the small details — spacing, load times, the way a button
				feels when you click it. Outside of client work, I'm usually
				shipping side projects or picking apart how other products are
				built.
			</p>
			<h2 className="section-title font-bold text-2xl my-3">
				quick facts
			</h2>
			<div className="flex flex-wrap justify-around space-x-3">
				<div className="stat-card shadow bg-gray-100 flex flex-col justify-center items-center flex-1 rounded px-3 py-2 min-w-40 ">
					<div className="stat-num text-4xl font-bold text-gray-700">
						2+
					</div>
					<div className="stat-label text-center">years building</div>
				</div>
				<div className="stat-card shadow bg-gray-100 flex flex-col justify-center items-center flex-1 rounded px-3 py-2 min-w-40 ">
					<div className="stat-num text-4xl font-bold text-gray-700">
						15+
					</div>
					<div className="stat-label text-center">
						projects shipped
					</div>
				</div>
				<div className="stat-card shadow bg-gray-100 flex flex-col justify-center items-center flex-1 rounded px-3 py-2 min-w-40 ">
					<div className="stat-num text-4xl font-bold text-gray-700">
						6
					</div>
					<div className="stat-label text-center">
						tech talks given
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
