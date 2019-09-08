import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [currentName, setNameToCassie] = useState("Kay"); // useState() gives back 2 parameters inside an array
  return (
    <div className="App">
      <div>
        <div>{currentName}</div>

        <button onClick={() => setNameToCassie("Cassie")}>
          Set name to Cassie
        </button>
      </div>
    </div>
  );
};

export default App;
