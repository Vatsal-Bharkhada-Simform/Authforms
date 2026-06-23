import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router";
import { SignUp } from "./pages/SignUp";
import { Login } from "./pages/Login";
import { AuthLayout } from "./layout/AuthLayout";
import { Homepage } from "./pages/Homepage";
import { ProtectedRoute } from "./pages/ProtectedRoute";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<ProtectedRoute />}>
					<Route index element={<Homepage />} />
				</Route>
				<Route path="/auth" element={<AuthLayout />}>
					<Route path="/auth/signup" element={<SignUp />} />
					<Route path="/auth/login" element={<Login />} />
				</Route>

				<Route path="*" element={<Navigate to={"/auth/login"} />} />
			</Routes>
		</Router>
	);
}

export default App;
