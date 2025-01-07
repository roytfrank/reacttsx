import classes from "./Post.module.css";

interface PostProps {
  name: string;
  text: string;
}

function Post({ name, text }: PostProps) {
  return (
    <div className={classes.post}>
      <p className={classes.author}>{name}</p>
      <p className={classes.text}>{text}</p>
    </div>
  );
}

export default Post;
