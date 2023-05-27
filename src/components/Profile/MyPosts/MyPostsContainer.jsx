import React from "react";
import { addPostActionCreatter, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
	let state = props.store.getState();
	const addPost = () => {
		props.store.dispatch(addPostActionCreatter());
	};
	let onPostChange = (text) => {
		let action = updateNewPostTextActionCreator(text);
		props.store.dispatch(action);
	};
	return <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts} />;
};
export default MyPostsContainer;
