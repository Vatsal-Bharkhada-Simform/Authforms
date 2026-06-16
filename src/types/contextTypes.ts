import type { LoginType, SignUpType } from "./formDataTypes";

export type AuthContextType = {
	isAuthenticated: boolean;
	handleSignUp: (data: SignUpType) => void;
	handleLogin: (data: LoginType) => void;
	handleLogout: () => void;
};
