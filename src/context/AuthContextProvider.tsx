import { useState, type ReactElement } from "react";
import type { LoginType, SignUpType } from "../types/formDataTypes";
import { AuthContext } from "./AuthContext";
import toast from "react-hot-toast";

export function AuthContextProvider({ children }: { children: ReactElement }) {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	function handleSignUp(data: SignUpType) {
		console.log(data);
		toast.success("Signed up successfully!");
		setIsAuthenticated(true);
	}

	function handleLogin(data: LoginType) {
		console.log(data);
		setIsAuthenticated(true);
	}

	function handleLogout() {
		setIsAuthenticated(false);
	}

	const ctxValue = {
		isAuthenticated,
		handleSignUp,
		handleLogin,
		handleLogout,
	};

	return (
		<AuthContext.Provider value={ctxValue}>{children}</AuthContext.Provider>
	);
}
