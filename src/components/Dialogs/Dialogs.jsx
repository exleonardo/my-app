import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogsItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
	const dialogsElements = props.state.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />);
	const messagesElements = props.state.messages.map((m) => <Message message={m.message} id={m.id} />);
	const newPostElement = React.createRef();
	const newMessageBody = props.state.newMessageBody.map((m) => <Message message={m.message} />);
	const onSendMessageClick = () => {};
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>{dialogsElements}</div>
			<div className={s.messages}>
				<div>{messagesElements}</div>
				<div>
					<div>
						<textarea ref={newPostElement} placeholder="Enter your message"></textarea>
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
