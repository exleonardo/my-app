import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { addPostActionCreatter, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
	const addPost = () => {
		props.dispatch(addPostActionCreatter());
	};
	let onPostChange = (text) => {
		let action = updateNewPostTextActionCreator(text);
		props.dispatch(action);
	};
	return <MyPosts updateNewPostText={onPostChange} addPost={addPost} />;
};
export default MyPostsContainer;
