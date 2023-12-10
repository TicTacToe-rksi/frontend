import { BottomNavBar } from "../UI/BottomNavBar/BottomNavBar";
import { Outlet } from "react-router-dom";
import { TopHeaderLogo } from "../UI/TopHeaderLogo/TopHeaderLogo";

export default function Layout() {
	return (
		<>
			<Outlet />

			<BottomNavBar />
		</>
	)
}
