import { useState } from "react";
import { Input } from "../UI/Input";
import Button from "../UI/Button";
import { PasswordInput } from "../UI/PasswordInput";

function SignUp() {
	const [showError, setShowError] = useState(false);

	return (
		<div className="w-full flex flex-col items-center gap-4">
			<h1>Signup</h1>
			<div className="w-lg flex flex-col gap-2">
				<Input
					type="password"
					labelText="Name"
					required
					errorText={showError ? "Invalid name" : ""}
				/>
				<PasswordInput
					labelText="Name"
					errorText={showError ? "Invalid name" : ""}
				/>

				<Button
					variant="PRIMARY"
					onClick={() => setShowError((prev) => !prev)}
				>
					Toggle error
				</Button>
				<Button
					variant="SECONDARY"
					onClick={() => setShowError((prev) => !prev)}
				>
					Toggle error
				</Button>
				<Button
					variant="DANGER"
					onClick={() => setShowError((prev) => !prev)}
				>
					Toggle error
				</Button>
			</div>
		</div>
	);
}

export { SignUp };
