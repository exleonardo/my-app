import s from "./Dialogs.module.css";
import { Link } from "react-router-dom";

const Dialogs = (props) => {
	const DialigItem = (props) => {
		const path = "/dialogs/" + props.id;
		return (
			<div className={s.dialog + ` ` + s.active}>
				<Link to={path}>{props.name}</Link>
			</div>
		);
	};
	const Message = (props) => {
		return <div className={s.message}>{props.message}</div>;
	};
	const dialogsData = [
		{ id: 1, name: "Dima" },
		{ id: 2, name: "Masha" },
		{ id: 3, name: "Rita" },
		{ id: 4, name: "Lera" },
		{ id: 5, name: "Artem" },
	];

	const messagesData = [
		{ id: 1, message: "Hi" },
		{ id: 2, message: "How is your it-camasutra" },
		{ id: 3, message: "Yo!" },
		{ id: 4, message: "Yo!" },
		{ id: 5, message: "Yo!" },
	];

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				<DialigItem name={dialogsData[0].name} id={dialogsData[0].id} />
				<DialigItem name={dialogsData[1].name} id={dialogsData[1].id} />
				<DialigItem name={dialogsData[2].name} id={dialogsData[2].id} />
				<DialigItem name={dialogsData[3].name} id={dialogsData[3].id} />
				<DialigItem name={dialogsData[4].name} id={dialogsData[4].id} />
			</div>
			<div className={s.messages}>
				<Message message={messagesData[0].message} id={messagesData[0].id} />
				<Message message={messagesData[1].message} id={messagesData[1].id} />
				<Message message={messagesData[2].message} id={messagesData[2].id} />
				<Message message={messagesData[3].message} id={messagesData[3].id} />
				<Message message={messagesData[4].message} id={messagesData[4].id} />
			</div>
		</div>
	);
};
export default Dialogs;
