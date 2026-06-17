import { LoginForm } from "../components/LoginForm";
import { AuthFormComposition } from "../layout/AuthFormComposition";

export function Login() {
	return (
		<AuthFormComposition
			header="Login"
			description="Login using your email and password"
		>
			<LoginForm />
		</AuthFormComposition>
	);
}
