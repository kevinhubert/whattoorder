import React from 'react';
import SidebarListItem from './SidebarListItem';
import { Link } from 'react-router-dom';
import { urlFormat } from '../helper';

class Sidebar extends React.Component {
  render() {
    const restaurants = this.props.restaurant;
    return (
      <aside>
        <h3>Restuarants</h3>
        {restaurants.map(restaurant => {
          return (
            <Link to={`/restaurant/${urlFormat(restaurant.name)}`}>
              <SidebarListItem
                key={restaurant.name}
                restaurantName={restaurant.name}
                restaurantDesc={restaurant.tagline}
                restaurantReview={`${restaurant.rating} Stars`}
                restaurantImage={restaurant.image}
              />
            </Link>
          );
        })}
      </aside>
    );
  }
}

export default Sidebar;
