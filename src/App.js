import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import store from "./redux/redux-store";

const App = (props) => {
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header />
				<Navbar />
				<div className="app-wrapper-content">
					<Routes>
						<Route path="/profile/*" element={<Profile store={props.store} />} />
						<Route path="/dialogs/*" element={<Dialogs store={props.store} state={props.state} />} />
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
