import React from "react";
import s from "./Dialogs.module.css";
import { updateNewMessageBodyCreator, SendMessageCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../storeContext";
import store from "../../redux/store";

const DialogsContainer = () => {
	return (
		<StoreContext.Consumer>
			{(store) => {
				let state = store.getState().dialogsPage;
				const onNewMessageChange = (body) => {
					store.dispatch(updateNewMessageBodyCreator(body));
				};
				const onSendMessageClick = () => {
					store.dispatch(SendMessageCreator());
				};
				return (
					<Dialogs
						updateNewMessageBody={onNewMessageChange}
						sendMessage={onSendMessageClick}
						dialogsPage={state}
					/>
				);
			}}
		</StoreContext.Consumer>
	);
};
export default DialogsContainer;
