import React from "react";

import User from "./user.component";
import Post from "./post.component";
import "./App.css";

const App = () => (
  <div className="App">
    <User userId={1} />
    <Post postId={5} />
  </div>
);

export default App;
