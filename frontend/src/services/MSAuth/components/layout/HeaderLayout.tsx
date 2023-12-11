import {Outlet} from "react-router-dom";
import {TopHeaderLogo} from "../UI/TopHeaderLogo/TopHeaderLogo";

export default function HeaderLayout() {
	return (
		<>
			<TopHeaderLogo />

			<Outlet />
		</>
	)
}