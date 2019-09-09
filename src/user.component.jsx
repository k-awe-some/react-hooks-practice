import React, { useState, useEffect } from "react";

const User = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users?id=${userId}`
      );
      const users = await res.json();
      setUser(users[0]);
    };

    fetchUser();
  }, [userId]);

  console.log(user);

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
