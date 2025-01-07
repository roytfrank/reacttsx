import classes from "./Post.module.css";
import { Link } from "react-router-dom";

interface PostProps {
  name: string;
  text: string;
  id: any;
}

function Post({ id, name, text }: PostProps) {
  return (
    <div className={classes.post}>
      <Link to={id}>
        <p className={classes.author}>{name}</p>
        <p className={classes.text}>{text}</p>
      </Link>
    </div>
  );
}

export default Post;
