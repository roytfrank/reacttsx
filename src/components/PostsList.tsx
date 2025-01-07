import Post from "./Post";
import classes from "./PostsList.module.css";
import { useLoaderData } from "react-router-dom";

function PostsList() {
  const posts = useLoaderData();
  return (
    <>
      {posts.length > 0 ? (
        <div className={classes.posts}>
          {posts.map((item: any, index: any) => {
            return (
              <Post
                id={item.id}
                key={index}
                name={item.name}
                text={item.body}
              />
            );
          })}
        </div>
      ) : (
        <div style={{ textAlign: "center", color: "black" }}>
          <h2>There are no posts created.</h2>
          <p>Start adding new posts</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
