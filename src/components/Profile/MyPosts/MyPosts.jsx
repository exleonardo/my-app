import s from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = () => {
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
				<Post message="Hi how are you " likesCount="1" />
				<Post message="It's my first post" likesCount="2" />
			</div>
		</div>
	);
};
export default MyPosts;
