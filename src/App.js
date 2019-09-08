import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (searchQuery.length > 0) {
      console.log("Input just got changed!");
      const fetchFunc = async () => {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users?username=${searchQuery}`
        );
        const resJson = await res.json();
        setUser(resJson[0]);
      };

      fetchFunc();
    }
  }, [searchQuery]);

  /* useEffect(): does the job of componentDidMount()

  * takes in a function that gets fired for the first time component mounts
  * MUST be used at the top of component (so MUST useState())
  * must NOT return anything but a function (aka it must NOT take in an async func)
  * instead, store async function in a variable, then run it at the end

  * when NO array as second param:
  * useEffect() fires everytime component gets changed
  * eg: everytime [searchQuery] gets changed useEffect() will fire

  * when EMPTY array as second param:
  * useEffect() won't fire again (because it's NOT watching for changes)

  * when array HAS properties (conditions)
  * useEffect() only fires again if those properties get changed
  * eg: if [user] gets changed useEffect() will fire
  */

  return (
    <div className="App">
      <input
        type="search"
        placeholder="Search for username"
        value={searchQuery}
        onChange={event => setSearchQuery(event.target.value)}
      />

      {user ? (
        <div>
          <h3>{user.name}</h3>
          <h3>{user.username}</h3>
          <h3>{user.email}</h3>
        </div>
      ) : (
        <div>{"User not found."}</div>
      )}

      <div className="test-queries">
        {"Some test queries to search for:"}
        <ul>
          <li>{"Karianne"}</li>
          <li>{"Elwyn.Skiles"}</li>
          <li>{"Bret"}</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
