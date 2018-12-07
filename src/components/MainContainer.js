import React from 'react';
import ItemCard from './ItemCard';

class MainContainer extends React.Component {
  render() {
    return (
      <main className="row">
        <div className="col-12">
          <h2>Restaurant Name</h2>
        </div>
        {this.props.dishes.map(dish => {
          return (
            <div className="col-4">
              <ItemCard
                itemTitle={dish.name}
                itemDesc={dish.desc}
                itemImage={dish.image}
              />
            </div>
          );
        })}
      </main>
    );
  }
}

export default MainContainer;
