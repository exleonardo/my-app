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
				<Message message="Hi" />
				<Message message="How is your it-camasutra" />
				<Message message="Yo!" />
			</div>
		</div>
	);
};
export default Dialogs;
