import React, { Component } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContainer from './components/MainContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col">
              <Header title="What To Order" />
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <Sidebar />
            </div>
            <div className="col-8">
              <MainContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
