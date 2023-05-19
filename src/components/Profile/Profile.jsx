import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
const Profile = () => {
	return (
		<div>
			<div>
				<img
					src="https://images.theconversation.com/files/71098/original/image-20150204-28578-7qf35.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
					alt="logo"
				></img>
			</div>
			<div>ava + desc</div>
			<MyPosts />
		</div>
	);
};
export default Profile;
