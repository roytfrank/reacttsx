import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import classes from "./PostsList.module.css";
import { useEffect, useState } from "react";

interface PostsListProps {
  isPosting: boolean;
  onStopPosting: () => void;
}

interface Post {
  body: string;
  name: string;
}

function PostsList({ isPosting, onStopPosting }: PostsListProps) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      const response = await fetch("http://localhost:8080/posts");
      const resData = await response.json();
      setPosts(resData.posts);
      setIsFetching(false);
    }
    fetchPosts();
  }, []);

  const addPostHandler = (post: Post) => {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));

    setPosts((posts) => [post, ...posts]);
  };

  return (
    <>
      {isPosting && (
        <Modal onCloseModal={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      {!isFetching && posts.length > 0 ? (
        <div className={classes.posts}>
          {posts.map((item, index) => {
            return <Post key={index} name={item.name} text={item.body} />;
          })}
        </div>
      ) : !isFetching && posts.length === 0 ? (
        <div style={{ textAlign: "center", color: "black" }}>
          <h2>There are no posts created.</h2>
          <p>Start adding new posts</p>
        </div>
      ) : (
        <div style={{ textAlign: "center", color: "black" }}>
          <p>Loding posts...</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
