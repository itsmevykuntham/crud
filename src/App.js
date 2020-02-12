import React, { Component } from "react";
import AddUser from "./AddUser";
import ViewUser from "./ViewUser";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>CRUD App</h1>
        <div className="flex-row">
          <div className="flex-large">
            <h2>Add user</h2>
            <AddUser />
          </div>
          <div className="flex-large">
            <ViewUser />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
