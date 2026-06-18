import { Check } from "lucide-react";
import { useAuth } from "../context/useAuth";
import { useNavigate } from "react-router";

export function Homepage() {
	const { getUserData } = useAuth();
	const userData = getUserData();
	const navigate = useNavigate();

	if (!userData || userData === null) {
		navigate("/auth/login");
	}

	return (
		<main className="w-full h-screen overflow-hidden flex justify-center items-center">
			<div className="w-xl flex flex-col gap-4 p-8 border border-gray-300 rounded-4xl shadow-card">
				<h1 className="text-3xl">
					Welcome, {`${userData?.firstName} ${userData?.lastName}`}
				</h1>
				<div className="flex gap-2">
					You have logged in successfully
					<span className="inline-flex justify-center items-center w-6 aspect-square rounded-4xl bg-green-500">
						<Check size={16} />
					</span>
				</div>
			</div>
		</main>
	);
}
