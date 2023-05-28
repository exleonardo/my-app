import React from "react";
import { addPostActionCreatter, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../storeContext";

const MyPostsContainer = (props) => {
	return (
		<StoreContext.Consumer>
			{(store) => {
				debugger;
				let state = store.getState();
				const addPost = () => {
					store.dispatch(addPostActionCreatter());
				};
				let onPostChange = (text) => {
					let action = updateNewPostTextActionCreator(text);
					store.dispatch(action);
				};
				return (
					<MyPosts
						updateNewPostText={onPostChange}
						addPost={addPost}
						posts={state.profilePage.posts}
						newPostText={state.profilePage.newPostText}
					/>
				);
			}}
		</StoreContext.Consumer>
	);
};
export default MyPostsContainer;
