import React from 'react';
import ItemCard from './ItemCard';

class MainContainer extends React.Component {
  render() {
    return (
      <main className="row">
        <div className="col-12">
          <h2>Restaurant Name</h2>
        </div>
        <div className="col-4">
          <ItemCard
            itemTitle="Damn Good Salad"
            itemDesc="This shit is off the hook yo - you gotta try it and leave a review!"
          />
        </div>
        <div className="col-4">
          <ItemCard
            itemTitle="Damn Good Salad"
            itemDesc="This shit is off the hook yo - you gotta try it and leave a review!"
          />
        </div>
        <div className="col-4">
          <ItemCard
            itemTitle="Damn Good Salad"
            itemDesc="This shit is off the hook yo - you gotta try it and leave a review!"
          />
        </div>
        <div className="col-4">
          <ItemCard
            itemTitle="Damn Good Salad"
            itemDesc="This shit is off the hook yo - you gotta try it and leave a review!"
          />
        </div>
        <div className="col-4">
          <ItemCard
            itemTitle="Damn Good Salad"
            itemDesc="This shit is off the hook yo - you gotta try it and leave a review!"
          />
        </div>
        <div className="col-4">
          <ItemCard
            itemTitle="Damn Good Salad"
            itemDesc="This shit is off the hook yo - you gotta try it and leave a review!"
          />
        </div>
      </main>
    );
  }
}

export default MainContainer;
