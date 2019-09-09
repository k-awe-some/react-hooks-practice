import React from "react";

import useFetch from "./effects/use-fetch.effect";

const User = ({ userId }) => {
  const user = useFetch(
    `https://jsonplaceholder.typicode.com/users?id=${userId}`
  );

  return (
    <div style={{ width: "50%", textAlign: "left" }}>
      <span style={{ color: "red", fontWeight: "bold" }}>User</span>
      {user ? (
        <div>
          <div style={{ fontWeight: "bold" }}>{user.username}</div>
          <div>{user.name}</div>
        </div>
      ) : (
        <div>{"No user found"}</div>
      )}
    </div>
  );
};

export default User;
