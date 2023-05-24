import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

export let addPostActionCreatter = () => {
	return { type: "ADD-POST" };
};
export let updateNewPostTextActionCreator = (text) => {
	return { type: "UPDATE-NEW-POST-TEXT", newText: text };
};
const MyPosts = (props) => {
	const postsElements = props.posts.map((p) => (
		<Post message={p.message} id={p.id} likesCount={p.likesCount} />
	));
	const newPostElement = React.createRef();
	const addPost = () => {
		debugger;
		props.dispatch(addPostActionCreatter());
	};
	let onPostChange = () => {
		let text = newPostElement.current.value;
		let action = updateNewPostTextActionCreator(text);
		props.dispatch(action);
	};

	return (
		<div className={s.postsBlock}>
			<h3>my posts</h3>
			<div>
				<div>
					<textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
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
