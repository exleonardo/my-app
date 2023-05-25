const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

const dialogsReducer = (state, action) => {
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
