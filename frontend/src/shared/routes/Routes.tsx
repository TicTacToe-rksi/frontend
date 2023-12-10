//@ts-nocheck

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AuthLoginPage from "../../services/MSAuth/pages/AuthLoginPage";
import AuthRegisterPage from "../../services/MSAuth/pages/AuthRegisterPage";
import Layout from "../../services/MSAuth/components/layout/Layout";
import { HomePage } from "../../services/MSAuth/pages/HomePage";
import PvpPage from "../../services/MSAuth/pages/PvpPage";
import ChallengesPage from "../../services/MSAuth/pages/challengesPage";
import SearchOpponentPage from "../../services/MSAuth/pages/SearchOpponentPage";
import HeaderLayout from "../../services/MSAuth/components/layout/HeaderLayout";


export default function AppRouting() {
	return (
		<Router>
			<Routes>
				<Route index path="/authLogin" element={ <AuthLoginPage /> } />
				<Route path="/authRegister" element={ <AuthRegisterPage /> } />


				<Route path='/' element={ <HeaderLayout /> }>
					<Route path="/" element={ <Layout /> }>
						<Route path="/home" element={ <HomePage /> }/>
						<Route path="/pvp" element={ <PvpPage /> } />
						<Route path="/challenges" element={ <ChallengesPage /> } />
					</Route>

					<Route path="/searchOpponent" element={ <SearchOpponentPage /> } />
				</Route>



				{/*<Route path="/onlineGame" element={  } />*/}
				{/*<Route path="/botGame" element={  } />*/}
			</Routes>
		</Router>
	)
}
