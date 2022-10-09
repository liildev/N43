import React from "react";
import PostItem from "./PostItem";

export default function PostList({ posts, removePost, title }) {
  return (
    <div>
      <h1>{posts.length ? title : "Posts Not Found"}</h1>
      {posts.map((post) => (
        <PostItem
          key={post.id}
          post={post}
          remove={removePost}
        />
      ))}
    </div>
  );
}
