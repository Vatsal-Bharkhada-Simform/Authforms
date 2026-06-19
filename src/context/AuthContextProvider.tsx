import { type ReactElement } from "react";
import type { LoginType, SignUpType } from "../types/formDataTypes";
import { AuthContext } from "./AuthContext";
import toast from "react-hot-toast";
import { useLocalStorage } from "../hooks/useLocalStorage";
import type {
	AuthenticationType,
	LoginReturnType,
} from "../types/contextTypes";

const LOCALSTORAGE_STORE = "USER_DETAILS";
const LOCALSTORAGE_AUTH_STORE = "USER_AUTH_DETAILS";

export function AuthContextProvider({ children }: { children: ReactElement }) {
	const [isAuthenticated, setIsAuthenticated] =
		useLocalStorage<AuthenticationType>(LOCALSTORAGE_AUTH_STORE, {
			status: false,
		});
	const [userData, setUserData] = useLocalStorage<Array<SignUpType>>(
		LOCALSTORAGE_STORE,
		[]
	);

	function handleSignUp(data: SignUpType) {
		setUserData((prev) => [...prev, data]);
		setIsAuthenticated({
			status: true,
			userEmail: data.email,
		});
		toast.success("Signed up successfully!");
		return true;
	}

	function handleLogin(data: LoginType): LoginReturnType {
		const user = userData.find((user) => user.email === data.email);
		if (!user) {
			return {
				status: "failed",
				errorField: "email",
				message: "User does not exist",
			};
		}
		if (!(user.password === data.password)) {
			return {
				status: "failed",
				errorField: "password",
				message: "Incorrect password",
			};
		}

		setIsAuthenticated({
			status: true,
			userEmail: user.email,
		});
		toast.success("Logged in successfully!");
		return {
			status: "success",
		};
	}

	function handleLogout() {
		setIsAuthenticated({
			status: false,
		});
	}

	function getUserData() {
		if (isAuthenticated.status) {
			return (
				userData.find(
					(user) => user.email === isAuthenticated.userEmail
				) ?? null
			);
		}
		return null;
	}

	const ctxValue = {
		isAuthenticated,
		handleSignUp,
		handleLogin,
		handleLogout,
		getUserData,
	};

	return (
		<AuthContext.Provider value={ctxValue}>{children}</AuthContext.Provider>
	);
}
