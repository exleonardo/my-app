import "./App.css";

const App = () => {
	return (
		<div className="app-wrapper">
			<header className="header">
				<img src="https://andpro.ru/upload/iblock/984/Apple_logo_black.svg" />
			</header>
			<nav className="nav">
				<div>Profile</div>
				<div>Messages</div>
				<div>News</div>
				<div>Music</div>
			</nav>
			<div className="content">main content</div>
		</div>
	);
};

export default App;
