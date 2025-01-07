import classes from "./NewPost.module.css";
import { ChangeEvent, FormEvent, useState } from "react";

interface Post {
  body: string;
  name: string;
}

interface NewPostProps {
  onCancel: () => void;
  onAddPost: (post: Post) => void;
}

function NewPost({ onCancel, onAddPost }: NewPostProps) {
  const [currentBody, setCurrentBody] = useState("");
  const [currentName, setCurrentName] = useState("");

  const handleBodyChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setCurrentBody(event.target.value);
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setCurrentName(event.target.value);
  };

  const handleCreatePost = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const postData = {
      body: currentBody,
      name: currentName,
    };

    onAddPost(postData);
    onCancel();
  };

  return (
    <form className={classes.form} onSubmit={handleCreatePost}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={handleBodyChange} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={handleNameChange} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
