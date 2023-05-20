import s from "./Dialogs.module.css";
import { Link } from "react-router-dom";

const Dialogs = (props) => {
	const DialigItem = (props) => {
		return (
			<div className={s.dialog + ` ` + s.active}>
				<Link to="/dialogs/1">{props.name}</Link>
			</div>
		);
	};
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				<DialigItem name="Dima" id="1" />
				<DialigItem name="Masha" />
				<DialigItem name="Rita" />
				<DialigItem name="Lera" />
				<DialigItem name="Artem" />
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
