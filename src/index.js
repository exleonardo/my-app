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
			<App
				state={state}
				addPost={store.addPost.bind(store)}
				updateNewPostText={store.updateNewPostText.bind(store)}
			/>
		</React.StrictMode>
	);
};
rerenderEntireThree(store.getState());
store.subscribe(rerenderEntireThree);
