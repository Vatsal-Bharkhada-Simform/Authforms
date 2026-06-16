import { Route, BrowserRouter as Router, Routes } from "react-router";
import { SignUp } from "./pages/SignUp";
import { Login } from "./pages/Login";
import { AuthLayout } from "./layout/AuthLayout";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/auth" element={<AuthLayout />}>
					<Route path="/auth/signup" element={<SignUp />} />
					<Route path="/auth/login" element={<Login />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
