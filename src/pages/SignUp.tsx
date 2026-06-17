import { useState } from "react";
import { SignUpForm } from "../components/SignUpForm";

const stepMessages = [
	{
		heading: "Create a new account",
		description: "Tell us a bit about yourself and how we can reach you.",
	},
	{
		heading: "Address Details",
		description: "Let us know where you are currently located.",
	},
	{
		heading: "Profile Setup",
		description:
			"Add a photo and a few personal details to make your account yours.",
	},
	{
		heading: "Secure Your Account",
		description: "Create a strong password to keep your information safe.",
	},
];

const MAX_STEPS = 4;

function SignUp() {
	const [formStep, setFormStep] = useState(0);

	return (
		<div className="w-2xl flex flex-col gap-8 border border-gray-200 p-8 rounded-4xl shadow-card">
			<div className="flex flex-col gap-2">
				<h1 className="text-3xl font-semibold">
					{stepMessages[formStep].heading}
				</h1>
				<p className="text-gray-600">
					{stepMessages[formStep].description}
				</p>

				<div className="w-full flex gap-2 pt-2">
					{Array.from({ length: MAX_STEPS }).map((_, index) => {
						return (
							<div
								key={index}
								className={`flex-1 h-2 rounded-2xl ${index < formStep ? "bg-blue-500/90" : index === formStep ? "bg-blue-200" : "bg-gray-200/80"}`}
							></div>
						);
					})}
				</div>
			</div>

			<div className="w-full max-h-[60vh] overflow-hidden flex flex-col gap-2">
				<SignUpForm formStep={formStep} setFormStep={setFormStep} />
			</div>
		</div>
	);
}

export { SignUp };
