import React from 'react';
import './styles/SidebarListItem.css';

class SidebarListItem extends React.Component {
  render() {
    const styles = {
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundImage: `url(${this.props.restaurantImage})`
    };
    return (
      <div className="sidebar-list-item border-bottom">
        <div className="sidebar-list-item__img" style={styles} />
        <div className="sidebar-list-item__desc">
          <div>
            <strong>{this.props.restaurantName}</strong>
          </div>
          <div>{this.props.restaurantDesc}</div>
          <div>{this.props.restaurantReview}</div>
        </div>
      </div>
    );
  }
}

export default SidebarListItem;
