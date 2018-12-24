import React from 'react';
import {BrowserRouter , Router, Link} from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContainer from './MainContainer';
import restaurants from '../sampledata/restaurants';
import dishes from '../sampledata/dishes';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants, 
      dishes
    }; 
  } 
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col">
              <Header title="What To Order" />
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <Sidebar restaurant={this.state.restaurants} />
            </div>
            <div className="col-8">
              <MainContainer dishes={this.state.dishes} />
            </div>
          </div>
        </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
