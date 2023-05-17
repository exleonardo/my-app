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
			<a> LOL</a>
			<a> html</a>
			<a> js</a>
			<a> React</a>
		</div>
	);
};

export default App;
