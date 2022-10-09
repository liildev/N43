import React from "react";
import Button from "./UI/Button/Button";

export default function PostItem({ post, remove }) {
  return (
    <div className="post">
      <div>
        <h3>
          {post.id}. {post.title}
        </h3>
        <p>{post.body}</p>
      </div>

      <Button onClick={() => remove(post.id)}>Delete</Button>
    </div>
  );
}
