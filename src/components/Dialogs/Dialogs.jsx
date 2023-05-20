import s from "./Dialogs.module.css";
import DialogItem from "./DialogsItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
	// const dialogs = [
	// 	{ id: 1, name: "Dima" },
	// 	{ id: 2, name: "Masha" },
	// 	{ id: 3, name: "Rita" },
	// 	{ id: 4, name: "Lera" },
	// 	{ id: 5, name: "Artem" },
	// ];

	// const messages = [
	// 	{ id: 1, message: "Hi" },
	// 	{ id: 2, message: "How is your it-camasutra" },
	// 	{ id: 3, message: "Yo!" },
	// 	{ id: 4, message: "Yo!" },
	// 	{ id: 5, message: "Yo!" },
	// ];
	const dialogsElements = props.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />);
	const messagesElements = props.messages.map((m) => <Message message={m.message} id={m.id} />);
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>{dialogsElements}</div>
			<div className={s.messages}>{messagesElements}</div>
		</div>
	);
};
export default Dialogs;
