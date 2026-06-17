import { useForm } from "react-hook-form";
import type { LoginType } from "../types/formDataTypes";
import { loginValidator } from "../validators/loginValidator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../context/useAuth";
import { Input } from "../UI/Input";
import { PasswordInput } from "../UI/PasswordInput";
import Button from "../UI/Button";

export function LoginForm() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<LoginType>({
		resolver: zodResolver(loginValidator),
		mode: "onBlur",
	});

	const { handleLogin } = useAuth();

	return (
		<form
			onSubmit={handleSubmit(handleLogin)}
			className="flex flex-col gap-4"
		>
			<div className="flex flex-col gap-2">
				<Input
					type="text"
					{...register("email")}
					labelText="Email"
					placeholder="abc@gamil.com"
					errorText={errors?.email?.message ?? ""}
					disabled={isSubmitting}
				/>
				<PasswordInput
					{...register("password")}
					labelText="Password"
					placeholder="********"
					errorText={errors?.password?.message ?? ""}
					disabled={isSubmitting}
				/>
			</div>
			<Button variant="PRIMARY" disabled={isSubmitting}>
				Login
			</Button>
		</form>
	);
}
