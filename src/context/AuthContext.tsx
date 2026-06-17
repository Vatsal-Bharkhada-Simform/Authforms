import { createContext } from "react";
import type { AuthContextType } from "../types/contextTypes";

export const AuthContext = createContext<AuthContextType>({
	isAuthenticated: {
		status: false,
	},
	handleSignUp: () => {},
	handleLogin: () => {},
	handleLogout: () => {},
	getUserData: () => {},
});
