const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
	posts: [
		{ id: 1, message: "Hi how are you ", likesCount: 1 },
		{ id: 2, message: "It's my first post", likesCount: 2 },
	],
	newPostText: "it-camasutra.com",
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			let newPost = { id: 5, message: state.newPostText, likesCount: 0 };
			let stateCopy = { ...state };
			stateCopy.posts = [...state.posts];
	}
	if (action.type === ADD_POST) {
		let newPost = { id: 5, message: state.newPostText, likesCount: 0 };
		let stateCopy = { ...state };
		stateCopy.posts = [...state.posts];
		stateCopy.posts.push(newPost);
		stateCopy.newPostText = ``;
	} else if (action.type === UPDATE_NEW_POST_TEXT) {
		state.newPostText = action.newText;
	}
	return state;
};

export const addPostActionCreatter = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export default profileReducer;
