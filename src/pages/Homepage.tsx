import { Check } from "lucide-react";
import { useAuth } from "../context/useAuth";
import { useNavigate } from "react-router";
import Button from "../UI/Button";

export function Homepage() {
	const { getUserData, handleLogout } = useAuth();
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
						<Check size={16} color="#fff" />
					</span>
				</div>
				<div className="flex flex-col gap-3 p-4 bg-blue-50 rounded-xl">
					<div>
						<h2 className="text-xl pb-2 mb-2 block border-b border-b-gray-300">
							Contact details
						</h2>
						<div className="flex gap-2 text-base">
							<span className="font-semibold flex-1">Phone</span>
							<span className="flex-3">{userData?.contact}</span>
						</div>
						<div className="flex gap-2 text-base">
							<span className="font-semibold flex-1">Email</span>
							<span className="flex-3">{userData?.email}</span>
						</div>
					</div>
					<div>
						<h2 className="text-xl pb-2 mb-2 block border-b border-b-gray-300">
							Address details
						</h2>
						<div className="flex gap-2 text-base">
							<span className="font-semibold flex-1">City</span>
							<span className="flex-3">{userData?.city}</span>
						</div>
						<div className="flex gap-2 text-base">
							<span className="font-semibold flex-1">State</span>
							<span className="flex-3">{userData?.state}</span>
						</div>
						<div className="flex gap-2 text-base">
							<span className="font-semibold flex-1">
								Address
							</span>
							<span className="flex-3">{userData?.address}</span>
						</div>
					</div>
					<div>
						<h2 className="text-xl pb-2 mb-2 block border-b border-b-gray-300">
							Personal details
						</h2>
						<div className="flex gap-2 text-base">
							<span className="font-semibold flex-1">Age</span>
							<span className="flex-3">{userData?.age}</span>
						</div>
						<div className="flex gap-2 text-base">
							<span className="font-semibold flex-1">Gender</span>
							<span className="flex-3">{userData?.gender}</span>
						</div>
						<div className="flex gap-2 text-base">
							<span className="font-semibold flex-1">
								Birth date
							</span>
							<span className="flex-3">
								{new Date(
									userData?.birthDate ?? ""
								).toDateString()}
							</span>
						</div>
					</div>
				</div>
				<Button variant="DANGER" onClick={handleLogout}>
					Logout
				</Button>
			</div>
		</main>
	);
}
