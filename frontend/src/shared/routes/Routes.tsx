import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default function AppRouting() {
	return (
		<Router>
			<Routes>

				{/* Auth/Register */}
				<Route path='/' element={ <></> }>  {/* Layout */}
					<Route index path='/homepage' element={ <></> } />  {/* Main page */}

					<Route path='/' element={ <></> } />    {/* Other elements */}
				</Route>

				{/* Game */}
				<Route path='/' element={ <></> }>  {/* Layout */}
					<Route index path='/homepage' element={ <></> } />  {/* Main page */}

					<Route path='/' element={ <></> } />    {/* Other elements */}
				</Route>

			</Routes>
		</Router>
	)
}
