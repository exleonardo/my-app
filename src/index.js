import "./index.css";
import state from "./redux/state";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));
let rerenderEntireThree = (state) => {
	root.render(
		<React.StrictMode>
			<App state={store._state} addPost={store.addPost} updateNewPostText={updateNewPostText} />
		</React.StrictMode>
	);
};

rerenderEntireThree(state);
subscribe(rerenderEntireThree);
