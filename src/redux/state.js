const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
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
	},
	getState() {
		return this._state;
	},
	_callSubscriber() {},
	subscribe(observer) {
		this._callSubscriber = observer;
	},
	dispatch(action) {
		if (action.type === ADD_POST) {
			let newPost = { id: 5, message: this._state.profilePage.newPostText, likesCount: 0 };
			this._state.profilePage.posts.push(newPost);
			this._state.profilePage.newPostText = ``;
			this._callSubscriber(this._state);
		} else if (action.type === UPDATE_NEW_POST_TEXT) {
			this._state.profilePage.newPostText = action.newText;
			this._callSubscriber(this._state);
		} else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
			this._state.dialogsPage.newMessageBody = action.body;
			this._callSubscriber(this._state);
		}
	},
};
export const addPostActionCreatter = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default store;
