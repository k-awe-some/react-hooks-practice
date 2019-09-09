import React from "react";

import useFetch from "./effects/use-fetch.effect";

const Post = ({ postId }) => {
  const post = useFetch(
    `https://jsonplaceholder.typicode.com/posts?id=${postId}`
  );

  return (
    <div style={{ width: "50%", textAlign: "left" }}>
      <span style={{ color: "red", fontWeight: "bold" }}>Post</span>
      {post ? (
        <div>
          <div style={{ fontWeight: "bold" }}>{post.title}</div>
          <div>{post.body}</div>
        </div>
      ) : (
        <div>{"No post found"}</div>
      )}
    </div>
  );
};

export default Post;
