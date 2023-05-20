import s from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = () => {
	let posts = [
		{ id: 1, message: "Hi how are you ", likesCount: "1" },
		{ id: 2, message: "It's my first post", likesCount: "2" },
	];
	const postsElements = posts.map((p) => <Post message={p.message} id={p.id} likesCount={p.likesCount} />);

	return (
		<div className={s.postsBlock}>
			<h3>my posts</h3>
			<div>
				<div>
					<textarea></textarea>
				</div>
				<div>
					<button>Add Post</button>
				</div>
			</div>
			<div className={s.posts}>{postsElements}</div>
		</div>
	);
};
export default MyPosts;
