import React from "react";
import { addPostActionCreatter, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
	const addPost = () => {
		props.store.dispatch(addPostActionCreatter());
	};
	let onPostChange = (text) => {
		let action = updateNewPostTextActionCreator(text);
		props.store.dispatch(action);
	};
	return <MyPosts updateNewPostText={onPostChange} addPost={addPost} post={props.posts} />;
};
export default MyPostsContainer;
