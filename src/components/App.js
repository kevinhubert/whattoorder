import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContainer from './MainContainer';
import restaurants from '../sampledata/restaurants';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants,
      currentRestaurant: restaurants[0].id
    };
  }
  onRestaurantSelect = id => {
    this.setState({ currentRestaurant: id });
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
              <Sidebar
                restaurants={this.state.restaurants}
                onRestaurantSelect={this.onRestaurantSelect}
              />
            </div>
            <div className="col-8">
              <MainContainer
                dishes={this.state.dishes}
                name={
                  this.state.restaurants[this.state.currentRestaurant - 1].name
                }
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
