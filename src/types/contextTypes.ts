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
	handleSignUp: (data: SignUpType) => boolean;
	handleLogin: (data: LoginType) => boolean;
	handleLogout: () => void;
	getUserData: () => SignUpType | null;
};
