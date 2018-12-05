import React from 'react';
import RestaurantListItem from './RestaurantListItem';

const resturants = {};

class Sidebar extends React.Component {
  render() {
    return (
      <aside>
        <h3>Restuarants</h3>
        <RestaurantListItem
          restaurantName="Awesome Restaurant 1"
          restaurantDesc="This place totes rocks my socks off"
          restaurantReview="5 Stars"
        />
        <RestaurantListItem
          restaurantName="Awesome Restaurant 1"
          restaurantDesc="This place totes rocks my socks off"
          restaurantReview="5 Stars"
        />
        <RestaurantListItem
          restaurantName="Awesome Restaurant 1"
          restaurantDesc="This place totes rocks my socks off"
          restaurantReview="5 Stars"
        />
        <RestaurantListItem
          restaurantName="Awesome Restaurant 1"
          restaurantDesc="This place totes rocks my socks off"
          restaurantReview="5 Stars"
        />
        <RestaurantListItem
          restaurantName="Awesome Restaurant 1"
          restaurantDesc="This place totes rocks my socks off"
          restaurantReview="5 Stars"
        />
        <RestaurantListItem
          restaurantName="Awesome Restaurant 1"
          restaurantDesc="This place totes rocks my socks off"
          restaurantReview="5 Stars"
        />
      </aside>
    );
  }
}

export default Sidebar;
