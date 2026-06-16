import { SignUpForm } from "../components/SignUpForm";

function SignUp() {
	return (
		<div className="w-xl flex flex-col gap-4 border border-gray-200 p-4 rounded-3xl">
			<h1 className="text-3xl font-semibold">Signup</h1>
			<div className="w-full max-h-[60vh] overflow-y-auto flex flex-col gap-2">
				<SignUpForm />
			</div>
		</div>
	);
}

export { SignUp };
