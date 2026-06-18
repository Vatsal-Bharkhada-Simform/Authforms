import { createContext } from "react";
import type { AuthContextType } from "../types/contextTypes";
import type { SignUpType } from "../types/formDataTypes";

export const AuthContext = createContext<AuthContextType>({
	isAuthenticated: {
		status: false,
	},
	handleSignUp: () => false,
	handleLogin: () => false,
	handleLogout: () => {},
	getUserData: (): SignUpType => {
		return {} as SignUpType;
	},
});
