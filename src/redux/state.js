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
		},
	},
	getState() {
		return this._state;
	},
	_callSubscriber() {},
	_addPost() {
		let newPost = { id: 5, message: this._state.profilePage.newPostText, likesCount: 0 };
		this._state.profilePage.posts.push(newPost);
		this._state.profilePage.newPostText = ``;
		this._callSubscriber(this._state);
	},
	_updateNewPostText(newText) {
		this._state.profilePage.newPostText = newText;
		this._callSubscriber(this._state);
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},
	dispatch(action) {
		if (action.type === "ADD-POST") {
			let newPost = { id: 5, message: this._state.profilePage.newPostText, likesCount: 0 };
			this._state.profilePage.posts.push(newPost);
			this._state.profilePage.newPostText = ``;
			this._callSubscriber(this._state);
		} else if (action.type === "UPDATE-NEW-POST-TEXT") {
			this._state.profilePage.newPostText = action.newText;
			this._callSubscriber(this._state);
		}
	},
};

export default store;
