import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header />
				<Navbar />
				<div className="app-wrapper-content">
					<Routes>
						<Route path="/profile/*" element={<Profile store={props.store} />} />
						<Route path="/dialogs/*" element={<DialogsContainer store={props.store} state={props.state} />} />
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
