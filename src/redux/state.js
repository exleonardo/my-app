import dialogsReducer from "./dialogs-reducer";
import { profileReducer } from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let store = {
	_state: {
		profilePage: {
			posts: [
				{ id: 1, message: "Hi how are you ", likesCount: 1 },
				{ id: 2, message: "It's my first post", likesCount: 2 },
			],
			newPostText: "it-camasutra.com",
		},
		dialogsPage: {
			messages: [
				{ id: 1, message: "Hi" },
				{ id: 2, message: "How is your it-camasutra" },
				{ id: 3, message: "Yo!" },
				{ id: 4, message: "Yo!" },
				{ id: 5, message: "Yo!" },
			],
			dialogs: [
				{ id: 1, name: "Dima" },
				{ id: 2, name: "Masha" },
				{ id: 3, name: "Rita" },
				{ id: 4, name: "Lera" },
				{ id: 5, name: "Artem" },
			],
			newMessageBody: "",
		},
		sidebar: {},
	},
	getState() {
		return this._state;
	},
	_callSubscriber() {},
	subscribe(observer) {
		this._callSubscriber = observer;
	},
	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.sidebar = sidebarReducer(this._state.sidebar, action);

		this._callSubscriber(this._state);
	},
};

export const addPostActionCreatter = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export const SendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: text });
export default store;
