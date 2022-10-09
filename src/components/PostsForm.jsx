import React, { useState } from "react";
import Button from "./UI/Button/Button";
import Input from "./UI/Input/Input";

export default function PostsForm({ create }) {
  const [post, setPost] = useState({ title: "", body: "" });

  const addPost = (e) => {
    e.preventDefault();

    const newPost = {
      id: Date.now(),
      title: post.title,
      body: post.body,
    };

    create(newPost);
    setPost({ title: "", body: "" });
  };
  return (
    <form>
      <Input
        type="text"
        placeholder="Title"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <Input
        type="text"
        placeholder="Body"
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
      />

      <Button onClick={addPost}>Create post</Button>
    </form>
  );
}
