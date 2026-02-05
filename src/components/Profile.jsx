import React from "react";
import Heading1 from "./headings/Heading1";
import Contacts from "./Contacts";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import image from "../assets/imgs/me.png";

const Profile = () => {
	return (
		<div className="flex justify-center items-center w-[90%] mx-auto  p-2 md:p-10  ">
			<div className="flex-1  rounded-xl shadow-2xl shadow-gray-700  flex p-2 ">
				<div className=" flex-1 bg-gray-100  rounded-xl p-3 flex justify-center items-center flex-col  space-y-4 md:space-y-6 py-15">
					<div className="image shadow-lg rounded-2xl bg-white w-40 h-40 md:w-60 md:h-60 flex items-center justify-center">
						<img
							className="object-fit"
							src={image}
							alt="profile_image"
						/>
					</div>
					<Heading1 word="Shiva Doulagar" />
					<span className="tag px-4 py-2 rounded-2xl bg-white shadow-lg  ">
						Web Developer
					</span>
					<hr className="w-full h-1" />
					<Contacts />
					<div className="socal_icons">
						<div className="container w-full flex justify-center items-center gap-4">
							<a
								href="https://github.com/shivadoulagar"
								target="_blank"
								rel="noopener noreferrer"
								className="icons rounded-xl p-2 shadow-lg grayscale hover:grayscale-0 transition"
							>
								<GitHubIcon fontSize="large" />
							</a>

							<a
								href="https://www.linkedin.com/in/shiva-doulagar-95b494287/"
								target="_blank"
								rel="noopener noreferrer"
								className="icons rounded-xl p-2 shadow-lg grayscale hover:grayscale-0 transition"
							>
								<LinkedInIcon fontSize="large" />
							</a>

							<a
								href="https://x.com/Shiva_Doulagar"
								target="_blank"
								rel="noopener noreferrer"
								className="icons rounded-xl p-2 shadow-lg grayscale hover:grayscale-0 transition"
							>
								<XIcon fontSize="large" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
