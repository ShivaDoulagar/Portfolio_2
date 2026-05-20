import React, { useState } from "react";
import AboutMe from "./AboutMe";

const Navbar = () => {
	const [activeSection, setActiveSection] = useState("about");

	return (
		<div className="w-full">
			<nav className="w-full bg-white">
				<div className="navlinks px-6 py-4">
					<ol className="flex justify-start gap-5">
						<li
							onClick={() => setActiveSection("about")}
							className={`cursor-pointer ${
								activeSection === "about"
									? "text-blue-600 font-semibold border-b-2 border-blue-600"
									: "text-gray-600"
							}`}
						>
							About me
						</li>

						<li
							onClick={() => setActiveSection("experience")}
							className={`cursor-pointer ${
								activeSection === "experience"
									? "text-blue-600 font-semibold border-b-2 border-blue-600"
									: "text-gray-600"
							}`}
						>
							Experience
						</li>

						<li
							onClick={() => setActiveSection("projects")}
							className={`cursor-pointer ${
								activeSection === "projects"
									? "text-blue-600 font-semibold border-b-2 border-blue-600"
									: "text-gray-600"
							}`}
						>
							Projects
						</li>

						<li
							onClick={() => setActiveSection("tech")}
							className={`cursor-pointer ${
								activeSection === "tech"
									? "text-blue-600 font-semibold border-b-2 border-blue-600"
									: "text-gray-600"
							}`}
						>
							Tech stack
						</li>

						<li
							onClick={() => setActiveSection("contact")}
							className={`cursor-pointer ${
								activeSection === "contact"
									? "text-blue-600 font-semibold border-b-2 border-blue-600"
									: "text-gray-600"
							}`}
						>
							Contact me
						</li>
					</ol>
				</div>
			</nav>

			<main className="p-6">
				{activeSection === "about" && (
					<div>
						<AboutMe />
					</div>
				)}
				{activeSection === "experience" && <div>experience</div>}
				{activeSection === "projects" && <div>projects</div>}
				{activeSection === "tech" && <div>tech stack</div>}
				{activeSection === "contact" && <div>contact</div>}
			</main>
		</div>
	);
};

export default Navbar;
