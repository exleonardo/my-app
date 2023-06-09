import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
	const postsElements = props.posts.map((p) => (
		<Post message={p.message} id={p.id} likesCount={p.likesCount} />
	));
	const newPostElement = React.createRef();
	const onAddPost = () => {
		props.addPost();
	};
	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text);
	};
	return (
		<div className={s.postsBlock}>
			<h3>my posts</h3>
			<div>
				<div>
					<textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
				</div>
				<div>
					<button onClick={onAddPost}>Add Post</button>
				</div>
			</div>
			<div className={s.posts}>{postsElements}</div>
		</div>
	);
};
export default MyPosts;
