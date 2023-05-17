import "./App.css";

const App = () => {
	return (
		<div className="app-wrapper">
			<header>
				<img src="https://andpro.ru/upload/iblock/984/Apple_logo_black.svg" width={400} height={400} />
			</header>
			<nav>
				<div>Profile</div>
				<div>Messages</div>
				<div>News</div>
				<div>Music</div>
			</nav>
			<div>main content</div>
		</div>
	);
};

export default App;
