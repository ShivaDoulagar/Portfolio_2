import React from "react";
import Profile from "../components/Profile";
import RightContent from "../components/RightContent";

const LandingPage = () => {
	return (
		<div>
			<div className="w-screen h-screen flex justify-around  gap-3 flex-wrap">
				<div className="left  md:flex-2 w-screen  flex items-center ">
					<Profile />
				</div>
				<div className="right  flex-5  flex items-center  justify-center">
					<div className="w-full h-[80vh]  flex items-center flex-col  justify-center">
						<RightContent />
					</div>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
