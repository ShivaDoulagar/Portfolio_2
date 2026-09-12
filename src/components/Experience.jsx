import React from "react";

const Experience = () => {
	return (
		<div>
			<section class="tabpanel" id="experience">
				<h2 className="section-title text-blue-400 font-bold">
					<span className="prompt">$</span> cat experience.log
				</h2>
				<div class="relative  pl-6 max-w-xl mt-5 before:content-[''] before:absolute before:left-1.5 before:top-1.5 before:bottom-1.5 before:w-0.5 before:bg-line">
					<div class="relative pb-7 ">
						<div className="line absolute bottom-2 border border-gray-500 top-6 w-px -left-4.5"></div>
						<div class="absolute -left-6 top-1 w-3.5 h-3.5 rounded-full bg-panel border-[3px] border-good"></div>
						<div class="text-[15px] font-bold">
							Full Stack Developer
							<span class="bg-goodsoft text-good text-[10.5px] font-bold px-2 py-0.5 rounded-full ml-2 text-gray-600">
								current
							</span>
						</div>
						<div class="text-[12.5px] text-muted my-1 mb-2.5">
							<a href="https://pemvish.com" target="_blank">
								Pemvish LLC
							</a>{" "}
							<span class="mx-1.5">·</span> 2026 — Present
						</div>
						<ul class="text-[13.5px] leading-relaxed text-[#3a3d44] list-disc list-inside space-y-1">
							<li>
								Working as full stack dev as well as
								implementing rag based systems with intuitive
								user experience
							</li>
							<li>
								<span className="text-blue-500">
									Tech stack :
								</span>{" "}
								MEAN stack dev, RAG Based chatbots.
							</li>
						</ul>
					</div>

					<div class="relative pb-7">
						<div className="line absolute bottom-2 border border-gray-500 top-6 w-px -left-4.5"></div>
						<div class="absolute -left-6 top-1 w-3.5 h-3.5 rounded-full bg-panel border-[3px] border-accent"></div>
						<div class="text-[15px] font-bold">
							Web Development Intern
						</div>
						<div class="text-[12.5px] text-muted my-1 mb-2.5">
							Startup Studio <span class="mx-1.5">·</span> 2023 —
							2024
						</div>
						<ul class="text-[13.5px] leading-relaxed text-[#3a3d44] list-disc list-inside space-y-1">
							<li>
								Worked on internal dashboards using React and
								REST APIs.
							</li>
							<li>
								Fixed bugs and improved page load performance by
								roughly 30%.
							</li>
						</ul>
					</div>

					<div class="relative">
						<div className="line top-6 absolute bottom-2 border border-gray-500 w-px -left-4.5 border-dashed animate-pulse"></div>
						<div class="absolute -left-6 top-1 w-3.5 h-3.5 rounded-full bg-panel border-[3px] border-accent"></div>
						<div class="text-[15px] font-bold">
							Started learning to code
						</div>
						<div class="text-[12.5px] text-muted my-1 mb-2.5">
							Self-taught <span class="mx-1.5">·</span> 2022
						</div>
						<ul class="text-[13.5px] leading-relaxed text-[#3a3d44] list-disc list-inside space-y-1">
							<li>
								Began with HTML, CSS and JavaScript, then moved
								into React.
							</li>
						</ul>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Experience;
