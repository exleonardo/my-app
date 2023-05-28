import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./redux/store";
import StoreContext from "./storeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
let rerenderEntireThree = (state) => {
	root.render(
		<React.StrictMode>
			<StoreContext.Provider value={store}>
				<App />
			</StoreContext.Provider>
		</React.StrictMode>
	);
};
rerenderEntireThree(store.getState());
store.subscribe(() => {
	let state = store.getState();
	rerenderEntireThree(state);
});
