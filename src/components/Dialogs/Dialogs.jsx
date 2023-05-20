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
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				<DialigItem name="Dima" id="1" />
				<DialigItem name="Masha" id="2" />
				<DialigItem name="Rita" id="3" />
				<DialigItem name="Lera" id="4" />
				<DialigItem name="Artem" id="5" />
			</div>
			<div className={s.messages}>
				<div className={s.message}>Hi</div>
				<div className={s.message}>How is your it-camas</div>
				<div className={s.message}>Yo!</div>
			</div>
		</div>
	);
};
export default Dialogs;
