import React from "react";
import { addPostActionCreatter, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../storeContext";

const MyPostsContainer = (props) => {
	let onPostChange = (text) => {
		let action = updateNewPostTextActionCreator(text);
		props.store.dispatch(action);
	};
	return (
		<StoreContext.Consumer>
			{(store) => {
				let state = props.store.getState();
				const addPost = () => {
					props.store.dispatch(addPostActionCreatter());
				};
				return (
					<MyPosts
						updateNewPostText={onPostChange}
						addPost={addPost}
						posts={state.getState().profilePage.posts}
						newPostText={state.getState().profilePage.newPostText}
					/>
				);
			}}
		</StoreContext.Consumer>
	);
};
export default MyPostsContainer;
