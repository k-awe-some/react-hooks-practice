import React, { useState, useEffect } from "react";

const Post = ({ postId }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?id=${postId}`
      );
      const posts = await res.json();
      setPost(posts[0]);
    };

    fetchPost();
  }, [postId]);

  console.log(post);

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
