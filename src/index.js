import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./redux/store";

import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
let rerenderEntireThree = () => {
	root.render(
		<React.StrictMode>
			<Provider store={store}>
				<App />
			</Provider>
		</React.StrictMode>
	);
};
rerenderEntireThree(store.getState());
