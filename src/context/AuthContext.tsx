import { createContext } from "react";
import type { AuthContextType, LoginReturnType } from "../types/contextTypes";
import type { SignUpType } from "../types/formDataTypes";

export const AuthContext = createContext<AuthContextType>({
	isAuthenticated: {
		status: false,
	},
	handleSignUp: () => false,
	handleLogin: () => {
		return {} as LoginReturnType;
	},
	handleLogout: () => {},
	getUserData: (): SignUpType => {
		return {} as SignUpType;
	},
});
