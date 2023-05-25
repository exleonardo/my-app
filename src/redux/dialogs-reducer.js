const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

const dialogsReducer = (state, action) => {
	if (action.type === UPDATE_NEW_MESSAGE_BODY) {
		this._state.dialogsPage.newMessageBody = action.body;
	} else if (action.type === SEND_MESSAGE) {
		let body = this._state.dialogsPage.newMessageBody;
		state.newMessageBody = ``;
		state.messages.push({ id: 6, message: body });
	}
	return state;
};
