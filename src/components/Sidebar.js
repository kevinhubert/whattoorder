import React from 'react';
import SidebarListItem from './SidebarListItem';

class Sidebar extends React.Component {
  render() {
    return (
      <aside>
        <h3>Restuarants</h3>
        <SidebarListItem
          restaurantName="Awesome Restaurant 1"
          restaurantDesc="This place totes rocks my socks off"
          restaurantReview="5 Stars"
        />
        <SidebarListItem
          restaurantName="Awesome Restaurant 1"
          restaurantDesc="This place totes rocks my socks off"
          restaurantReview="5 Stars"
        />
        <SidebarListItem
          restaurantName="Awesome Restaurant 1"
          restaurantDesc="This place totes rocks my socks off"
          restaurantReview="5 Stars"
        />
        <SidebarListItem
          restaurantName="Awesome Restaurant 1"
          restaurantDesc="This place totes rocks my socks off"
          restaurantReview="5 Stars"
        />
        <SidebarListItem
          restaurantName="Awesome Restaurant 1"
          restaurantDesc="This place totes rocks my socks off"
          restaurantReview="5 Stars"
        />
        <SidebarListItem
          restaurantName="Awesome Restaurant 1"
          restaurantDesc="This place totes rocks my socks off"
          restaurantReview="5 Stars"
        />
      </aside>
    );
  }
}

export default Sidebar;
