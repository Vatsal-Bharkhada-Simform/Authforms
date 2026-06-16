import type z from "zod";
import type { signupValidator } from "../validators/signupValidator";
import type { loginValidator } from "../validators/loginValidator";

export type SignUpType = z.infer<typeof signupValidator>;

export type LoginType = z.infer<typeof loginValidator>;
