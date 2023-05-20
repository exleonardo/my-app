import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let posts = [
	{ id: 1, message: "Hi how are you ", likesCount: "1" },
	{ id: 2, message: "It's my first post", likesCount: "2" },
];
const dialogs = [
	{ id: 1, name: "Dima" },
	{ id: 2, name: "Masha" },
	{ id: 3, name: "Rita" },
	{ id: 4, name: "Lera" },
	{ id: 5, name: "Artem" },
];
const messages = [
	{ id: 1, message: "Hi" },
	{ id: 2, message: "How is your it-camasutra" },
	{ id: 3, message: "Yo!" },
	{ id: 4, message: "Yo!" },
	{ id: 5, message: "Yo!" },
];
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App posts={posts} dialogs={dialogs} messages={messages} />
	</React.StrictMode>
);

reportWebVitals();
