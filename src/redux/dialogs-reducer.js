const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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
};
const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_NEW_MESSAGE_BODY:
			state.newMessageBody = action.body;
			return state;
		case SEND_MESSAGE:
			let body = state.newMessageBody;
	}
	if (action.type === UPDATE_NEW_MESSAGE_BODY) {
		state.newMessageBody = action.body;
	} else if (action.type === SEND_MESSAGE) {
		let body = state.newMessageBody;
		state.newMessageBody = ``;
		state.messages.push({ id: 6, message: body });
	}
	return state;
};

export const SendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: text });
export default dialogsReducer;
