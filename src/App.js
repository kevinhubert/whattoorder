import React, { Component } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContainer from "./components/MainContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="What To Order" />
        <Sidebar />
        <MainContainer />
      </div>
    );
  }
}

export default App;
