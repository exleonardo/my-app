import s from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = () => {
	let postDate = [
		{ id: 1, message: "Hi how are you ", likesCount: "1" },
		{ id: 2, message: "It's my first post", likesCount: "2" },
	];
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
			<div className={s.posts}>
				<Post message={postDate[0].message} id={postDate[0].id} likesCount={postDate[0].likesCount} />
				<Post message={postDate[1].message} id={postDate[1].id} likesCount={postDate[1].likesCount} />
			</div>
		</div>
	);
};
export default MyPosts;
