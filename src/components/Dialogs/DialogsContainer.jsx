import React from "react";
import s from "./Dialogs.module.css";
import { updateNewMessageBodyCreator, SendMessageCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
	let state = props.store.getState().dialogsPage;
	const onNewMessageChange = (body) => {
		props.store.dispatch(updateNewMessageBodyCreator(body));
	};
	const onSendMessageClick = () => {
		props.store.dispatch(SendMessageCreator());
	};
	return (
		<Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state} />
	);
};
export default DialogsContainer;
