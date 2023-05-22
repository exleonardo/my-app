let store = {
	state: {
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
};

let rerenderEntireThree = () => {};
let state = {
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
};
export const addPost = () => {
	let newPost = { id: 5, message: state.profilePage.newPostText, likesCount: 0 };
	state.profilePage.posts.push(newPost);
	state.profilePage.newPostText = ``;
	rerenderEntireThree(state);
};
export const updateNewPostText = (newText) => {
	state.profilePage.newPostText = newText;
	rerenderEntireThree(state);
};
export const subscribe = (observer) => {
	rerenderEntireThree = observer;
};
export default state;
