import s from "./Post.module.css";
const Post = (props) => {
	const message = props.message;
	return (
		<div className={s.item}>
			<img src="https://www.meme-arsenal.com/memes/df2292c6c154dbedf5b22ab0fc54c755.jpg" alt="logo" />
			{message}
			<div>
				<span>Like</span>
				{props.likesCount}
			</div>
		</div>
	);
};
export default Post;
