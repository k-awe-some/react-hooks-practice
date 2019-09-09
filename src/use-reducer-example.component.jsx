import React, { useEffect, useReducer } from "react";

const INITIAL_STATE = {
  user: null,
  searchQuery: "Kay"
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };

    case "SET_SEARCH_QUERY":
      return { ...state, searchQuery: action.payload };

    default:
      return state;
  }
};

const setUser = user => ({
  type: "SET_USER",
  payload: user
});

const setSearchQuery = searchQuery => ({
  type: "SET_SEARCH_QUERY",
  payload: searchQuery
});

const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { user, searchQuery } = state;

  useEffect(() => {
    if (searchQuery.length > 0) {
      console.log("Input just got changed!");
      const fetchFunc = async () => {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users?username=${searchQuery}`
        );
        const resJson = await res.json();
        dispatch(setUser(resJson[0]));
      };

      fetchFunc();
    }
  }, [searchQuery]);

  return (
    <div className="App">
      <input
        type="search"
        placeholder="Search for username"
        value={searchQuery}
        onChange={event => dispatch(setSearchQuery(event.target.value))}
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

export default UseReducerExample;
