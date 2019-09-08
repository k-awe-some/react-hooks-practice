import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    currentName: "Kay"
  };

  setNameToCassie = () => this.setState({ currentName: "Cassie" });

  render() {
    const { currentName } = this.state;
    return (
      <div className="App">
        <div>
          <div>{currentName}</div>

          <button onClick={this.setNameToCassie}>Set name to Cassie</button>
        </div>
      </div>
    );
  }
}

export default App;
