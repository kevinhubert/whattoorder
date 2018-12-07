import React from 'react';
import SidebarListItem from './SidebarListItem';

class Sidebar extends React.Component {
  render() {
    const restaurants = this.props.restaurant;
    return (
      <aside>
        <h3>Restuarants</h3>
        {restaurants.map(restaurant => {
          return (
            <SidebarListItem
              key={restaurant.name}
              restaurantName={restaurant.name}
              restaurantDesc={restaurant.tagline}
              restaurantReview={`${restaurant.rating} Stars`}
              restaurantImage={restaurant.image}
            />
          );
        })}
      </aside>
    );
  }
}

export default Sidebar;
