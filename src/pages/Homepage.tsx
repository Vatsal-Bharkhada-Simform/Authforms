import { Check } from "lucide-react";
import { useAuth } from "../context/useAuth";
import { useNavigate } from "react-router";
import Button from "../UI/Button";
import { DataItem } from "../components/DataItem";

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
				<h1 className="text-3xl truncate">
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
						<DataItem title="Phone" value={userData?.contact} />
						<DataItem title="Email" value={userData?.email} />
					</div>
					<div>
						<h2 className="text-xl pb-2 mb-2 block border-b border-b-gray-300">
							Address details
						</h2>
						<DataItem title="City" value={userData?.city} />
						<DataItem title="State" value={userData?.state} />
						<DataItem title="Address" value={userData?.address} />
					</div>
					<div>
						<h2 className="text-xl pb-2 mb-2 block border-b border-b-gray-300">
							Personal details
						</h2>
						<DataItem title="Age" value={userData?.age} />
						<DataItem title="Gender" value={userData?.gender} />
						<DataItem
							title="Birth date"
							value={new Date(
								userData?.birthDate ?? ""
							).toDateString()}
						/>
					</div>
				</div>
				<Button variant="DANGER" onClick={handleLogout}>
					Logout
				</Button>
			</div>
		</main>
	);
}
