import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = (props) => {
	const postsElements = props.posts.map((p) => (
		<Post message={p.message} id={p.id} likesCount={p.likesCount} />
	));
	const newPostElement = React.createRef();
	const addPost = () => {
		let text = newPostElement.current.value;
		props.addPost(text);
		newPostElement.current.value = "";
	};
	return (
		<div className={s.postsBlock}>
			<h3>my posts</h3>
			<div>
				<div>
					<textarea ref={newPostElement} />
				</div>
				<div>
					<button onClick={addPost}>Add Post</button>
				</div>
			</div>
			<div className={s.posts}>{postsElements}</div>
		</div>
	);
};
export default MyPosts;
