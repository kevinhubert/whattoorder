import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContainer from './MainContainer';
import sampleRestaurants from '../sampledata/sampleRestaurants';

class App extends React.Component {
  state = {
    restaurants: {}
  };
  loadSampleRestaurants = () => {
    this.setState({ restaurants: sampleRestaurants });
  };
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
        <button
          className="btn btn-primary"
          onClick={this.loadSampleRestaurants}
        >
          Laod data
        </button>
      </div>
    );
  }
}

export default App;
