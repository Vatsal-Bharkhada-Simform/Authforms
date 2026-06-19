import { useForm } from "react-hook-form";
import type { LoginType } from "../types/formDataTypes";
import { loginValidator } from "../validators/loginValidator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../context/useAuth";
import { Input } from "../UI/Input";
import { PasswordInput } from "../UI/PasswordInput";
import Button from "../UI/Button";
import { useNavigate } from "react-router";

export function LoginForm() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		setError,
	} = useForm<LoginType>({
		resolver: zodResolver(loginValidator),
		mode: "onBlur",
	});

	const { handleLogin } = useAuth();
	const navigate = useNavigate();

	function loginUser(data: LoginType) {
		const res = handleLogin(data);
		if (res.status === "success") {
			navigate("/");
		} else {
			setError(res.errorField as keyof LoginType, {
				message: res.message,
			});
		}
	}

	return (
		<form
			onSubmit={handleSubmit(loginUser)}
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
