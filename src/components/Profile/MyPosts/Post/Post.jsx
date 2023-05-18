import s from "./Post.module.css";
const Post = () => {
	return (
		<div className={s.item}>
			<img src="https://www.meme-arsenal.com/memes/df2292c6c154dbedf5b22ab0fc54c755.jpg" alt="logo" />
			post 1
			<div>
				<span>Like</span>
			</div>
		</div>
	);
};
export default Post;
