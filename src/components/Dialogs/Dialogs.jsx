import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogsItem/DialogItem";
import Message from "./Message/Message";
import { updateNewMessageBodyCreator } from "../../redux/state";

const Dialogs = (props) => {
	const dialogsElements = props.state.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />);
	const messagesElements = props.state.messages.map((m) => <Message message={m.message} id={m.id} />);
	const newPostElement = React.createRef();
	const newMessageBody = props.state.newMessageBody;
	const onNewMessageChange = (e) => {
		let body = e.target.value;
		props.store.dispatch(updateNewMessageBodyCreator());
	};
	const onSendMessageClick = () => {};
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
						<button onClick={onSendMessageClick}>Send</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Dialogs;
