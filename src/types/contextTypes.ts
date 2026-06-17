import type { LoginType, SignUpType } from "./formDataTypes";

export type AuthenticationType =
	| {
			status: false;
	  }
	| {
			status: true;
			userEmail: string;
	  };

export type AuthContextType = {
	isAuthenticated: AuthenticationType;
	handleSignUp: (data: SignUpType) => void;
	handleLogin: (data: LoginType) => void;
	handleLogout: () => void;
	getUserData: () => void;
};
