import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogsItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
	let state = props.dialogsPage;

	const dialogsElements = state.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />);
	const messagesElements = state.messages.map((m) => <Message message={m.message} id={m.id} />);
	const newMessageBody = state.newMessageBody;
	const onNewMessageChange = (e) => {
		let body = e.target.value;
		props.updateNewMessageBody(body);
	};
	const onSendMessage = () => {
		props.sendMessage();
	};
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>{dialogsElements}</div>
			<div className={s.messages}>
				<div>{messagesElements}</div>
				<div>
					<div>
						<textarea
							onChange={onNewMessageChange}
							value={newMessageBody}
							placeholder="Enter your message"
						></textarea>
					</div>
					<div>
						<button onClick={onSendMessage}>Send</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Dialogs;
