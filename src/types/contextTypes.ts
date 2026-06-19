import type { LoginType, SignUpType } from "./formDataTypes";

export type AuthenticationType =
	| {
			status: false;
	  }
	| {
			status: true;
			userEmail: string;
	  };

export type LoginReturnType =
	| {
			status: "success";
	  }
	| {
			status: "failed";
			errorField: string;
			message: string;
	  };

export type AuthContextType = {
	isAuthenticated: AuthenticationType;
	handleSignUp: (data: SignUpType) => boolean;
	handleLogin: (data: LoginType) => LoginReturnType;
	handleLogout: () => void;
	getUserData: () => SignUpType | null;
};
