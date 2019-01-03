import React from 'react';
import './styles/SidebarListItem.css';

class SidebarListItem extends React.Component {
  render() {
    const { name, tagline, review, image, id } = this.props.restaurant;
    const { onRestaurantSelect } = this.props;
    const styles = {
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundImage: `url(${image})`
    };
    return (
      <div
        className="sidebar-list-item border-bottom"
        onClick={() => onRestaurantSelect(id)}
      >
        <div className="sidebar-list-item__img" style={styles} />
        <div className="sidebar-list-item__desc">
          <div>
            <strong>{name}</strong>
          </div>
          <div>{tagline}</div>
          <div>{review}</div>
        </div>
      </div>
    );
  }
}

export default SidebarListItem;
