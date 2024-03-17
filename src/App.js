import "./App.css";
import React from "react";
import Form from "./components/Form";
import List from "./components/List";

class App extends React.Component {
  render() {
    return (
      <div className="todo">
        <Form />
      </div>
    );
  }
}

export default App;
