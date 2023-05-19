import { Link } from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar = () => {
	return (
		<nav className={s.nav}>
			<div className={s.item}>
				<Link to="/profile">Profile</Link>
			</div>
			<div className={s.item}>
				<Link to="/dialogs">Messages</Link>
			</div>
			<div className={s.item}>
				<Link to="#s">News</Link>
			</div>
			<div className={s.item}>
				<a href="#s">Music</a>
			</div>
			<div className={s.item}>
				<a href="#s">Settings</a>
			</div>
		</nav>
	);
};

export default Navbar;
