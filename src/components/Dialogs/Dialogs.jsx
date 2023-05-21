import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogsItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
	const dialogsElements = props.state.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />);
	const messagesElements = props.state.messages.map((m) => <Message message={m.message} id={m.id} />);
	const newPostElement = React.createRef();
	const addPost = () => {
		let text = newPostElement.current.value;
		alert(text);
	};
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>{dialogsElements}</div>
			<div className={s.messages}>
				{messagesElements}
				<textarea ref={newPostElement}></textarea>
				<div>
					<button onClick={addPost}>add Post</button>
				</div>
			</div>
		</div>
	);
};
export default Dialogs;
