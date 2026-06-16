import { useForm } from "react-hook-form";
import { signupValidator } from "../validators/signupValidator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../context/useAuth";
import type { SignUpType } from "../types/formDataTypes";
import { Input } from "../UI/Input";
import Button from "../UI/Button";
import { PasswordInput } from "../UI/PasswordInput";

export function SignUpForm() {
	const {
		formState: { errors, isSubmitting },
		register,
		reset,
		handleSubmit,
	} = useForm<SignUpType>({
		resolver: zodResolver(signupValidator),
	});

	const { handleSignUp } = useAuth();

	return (
		<form onSubmit={handleSubmit(handleSignUp)}>
			<div className="w-full flex flex-col gap-2 px-2">
				<Input
					type="text"
					{...register("firstName")}
					labelText="First Name"
					errorText={errors?.firstName?.message ?? ""}
					disabled={isSubmitting}
				/>
				<Input
					type="text"
					{...register("lastName")}
					labelText="Last Name"
					errorText={errors?.lastName?.message ?? ""}
					disabled={isSubmitting}
				/>
				<Input
					type="email"
					{...register("email")}
					labelText="Email"
					errorText={errors?.email?.message ?? ""}
					disabled={isSubmitting}
				/>
				<Input
					type="tel"
					{...register("contact")}
					labelText="Contact"
					errorText={errors?.contact?.message ?? ""}
					disabled={isSubmitting}
				/>
				<Input
					type="text"
					{...register("city")}
					labelText="City"
					errorText={errors?.city?.message ?? ""}
					disabled={isSubmitting}
				/>
				<Input
					type="text"
					{...register("state")}
					labelText="State"
					errorText={errors?.state?.message ?? ""}
					disabled={isSubmitting}
				/>
				<Input
					type="text"
					{...register("address")}
					labelText="Address"
					errorText={errors?.address?.message ?? ""}
					disabled={isSubmitting}
				/>
				<Input
					type="number"
					{...register("age", { valueAsNumber: true })}
					labelText="Age"
					errorText={errors?.age?.message ?? ""}
					disabled={isSubmitting}
				/>
				<Input
					type="text"
					{...register("gender")}
					labelText="Gender"
					errorText={errors?.gender?.message ?? ""}
					disabled={isSubmitting}
				/>
				<Input
					type="file"
					accept="image/png, image/jpeg, image/jpg"
					{...register("profileImage")}
					labelText="Profile Image"
					errorText={errors?.profileImage?.message.toString() ?? ""}
					disabled={isSubmitting}
				/>
				<Input
					type="date"
					{...register("birthDate", { valueAsDate: true })}
					labelText="Birth Date"
					errorText={errors?.birthDate?.message ?? ""}
					disabled={isSubmitting}
				/>
				<PasswordInput
					{...register("password")}
					labelText="Password"
					errorText={errors?.password?.message ?? ""}
					disabled={isSubmitting}
				/>
				<PasswordInput
					{...register("confirmPassword")}
					labelText="Confirm Password"
					errorText={errors?.confirmPassword?.message ?? ""}
					disabled={isSubmitting}
				/>
				<Input
					type="checkbox"
					{...register("agreementConfirmation")}
					labelText="I accept the Terms of use and Privacy Policy"
					errorText={errors?.agreementConfirmation?.message ?? ""}
					disabled={isSubmitting}
				/>
			</div>
			<Button variant="PRIMARY" disabled={isSubmitting}>
				Submit
			</Button>
			<Button
				variant="SECONDARY"
				disabled={isSubmitting}
				onClick={() => reset()}
			>
				Reset
			</Button>
		</form>
	);
}
