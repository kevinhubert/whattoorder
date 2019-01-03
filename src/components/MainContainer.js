import React from 'react';
import ItemCard from './ItemCard';

class MainContainer extends React.Component {
  render() {
    return (
      <main className="row">
        <div className="col-12">
          <h2>{this.props.name}</h2>
        </div>
      </main>
    );
  }
}

export default MainContainer;
