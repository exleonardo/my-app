import "./App.css";

const App = () => {
	return (
		<div>
			<div>
				<Header />
			</div>
			<div className="App">
				<ul>
					<li>Name</li>
					<li>html</li>
					<li>js</li>
					<li>React</li>
				</ul>
			</div>
		</div>
	);
};

export const Header = () => {
	return (
		<div>
			<a href="#S"> LOL</a>
			<a href="#S"> html</a>
			<a href="#S"> js</a>
			<a href="#S"> React</a>
		</div>
	);
};

export default App;
