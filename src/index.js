import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import store from "./redux/store";
import store from "./redux/redux-store";

const root = ReactDOM.createRoot(document.getElementById("root"));
let rerenderEntireThree = (state) => {
	root.render(
		<React.StrictMode>
			<App dispatch={store.dispatch.bind(store)} state={state} store={store} />
		</React.StrictMode>
	);
};
rerenderEntireThree(store.getState());
store.subscribe(() => {
	let state = store.getState();
	rerenderEntireThree(state);
});
