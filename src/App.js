import "./App.css";

const App = () => {
	return (
		<div className="app-wrapper">
			<header className="header">
				<img src="https://andpro.ru/upload/iblock/984/Apple_logo_black.svg" alt="logo" />
			</header>
			<nav className="nav">
				<div>
					<a href="#s">Profile</a>
				</div>
				<div>
					<a href="#s">Messages</a>
				</div>
				<div>
					<a href="#s">News</a>
				</div>
				<div>
					<a href="#s">Music</a>
				</div>
				<div>
					<a href="#s">Settings</a>
				</div>
			</nav>
			<div className="content">
				<div>
					<img src="https://images.theconversation.com/files/71098/original/image-20150204-28578-7qf35.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"></img>
				</div>
				<div>ava + desc</div>
				<div>
					my posts
					<div>new Post</div>
					<div>
						posts
						<div>post 1</div>
						<div>post 2</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
