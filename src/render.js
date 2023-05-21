import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import state from "./redux/state";
import { addPost } from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));
export let rerenderEntireThree = () => {
	root.render(
		<React.StrictMode>
			<App state={state} addPost={addPost} />
		</React.StrictMode>
	);
};
