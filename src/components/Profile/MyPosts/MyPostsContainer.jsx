import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { addPostActionCreatter, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
	const postsElements = props.posts.map((p) => (
		<Post message={p.message} id={p.id} likesCount={p.likesCount} />
	));
	const newPostElement = React.createRef();
	const addPost = () => {
		props.dispatch(addPostActionCreatter());
	};
	let onPostChange = (text) => {
		let text = newPostElement.current.value;
		let action = updateNewPostTextActionCreator(text);
		props.dispatch(action);
	};
	return <MyPosts updateNewPostText={onPostChange} />;
};
export default MyPostsContainer;
