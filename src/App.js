import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

const App = (props) => {
	debugger;
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header />
				<Navbar />

				<div className="app-wrapper-content">
					<Routes>
						<Route
							path="/profile/*"
							element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />}
						/>
						<Route path="/dialogs/*" element={<Dialogs state={props.state.dialogsPage} />} />
						{/* <Route path="/news/*" element={<Dialogs />} />
						<Route path="/music/*" element={<Dialogs />} />
						<Route path="/setting/*" element={<Dialogs />} /> */}
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
