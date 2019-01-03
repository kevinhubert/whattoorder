import React from 'react';
import SidebarListItem from './SidebarListItem';
import { Link } from 'react-router-dom';
import { urlFormat } from '../helper';

class Sidebar extends React.Component {
  render() {
    const { restaurants, onRestaurantSelect } = this.props;
    return (
      <aside>
        <h3>Restuarants</h3>
        {restaurants.map(restaurant => {
          return (
            <Link
              to={`/restaurant/${urlFormat(restaurant.name)}`}
              key={restaurant.name}
            >
              <SidebarListItem
                restaurant={restaurant}
                onRestaurantSelect={onRestaurantSelect}
              />
            </Link>
          );
        })}
      </aside>
    );
  }
}

export default Sidebar;
