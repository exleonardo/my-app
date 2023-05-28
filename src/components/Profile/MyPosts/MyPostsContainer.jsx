import React from "react";
import { addPostActionCreatter, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../storeContext";
import { connect } from "react-redux";

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
const mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		updateNewPostText: (text) => {
			let action = updateNewPostTextActionCreator(text);
			dispatch(action);
		},
	};
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
