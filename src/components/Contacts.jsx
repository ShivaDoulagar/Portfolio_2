import React from "react";

const Contacts = () => {
	let contacts = [
		{
			label: "Mail",
			value: "shivadoulager@gmail.com",
			type: "mail",
			icon: "mail",
		},
		{
			label: "Address",
			value: "Hyderabad, Telangana, India",
			type: "address",
			icon: "add_home_work",
		},
		{
			label: "Github",
			value: "ShivaDoulagar",
			type: "github",
			icon: "code",
		},
	];

	return (
		<div className="flex flex-col items-center justify-center w-full space-y-5">
			{contacts.map((contact) => (
				<div className="flex justify-between w-full   ">
					<div className="left bg-white rounded-xl w-[20%] flex justify-center items-center mx-4 shadow-2xl ">
						<span className="material-icons-outlined text-black object-fit shadow-2xl">
							{contact.icon}
						</span>
					</div>
					<div className="content flex flex-col text-start flex-2 ">
						<h3 className="text-gray-600">{contact.label}</h3>
						<h2 className="md:text-lg text-md ">{contact.value}</h2>
					</div>
				</div>
			))}
		</div>
	);
};

export default Contacts;
