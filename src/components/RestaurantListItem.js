import React, { PureComponent } from 'react';
import './styles/RestuarantListItem.css';

class RestuarantListItem extends React.Component {
  render() {
    return (
      <div className="restaurant-list-item border-bottom">
        <div className="restaurant-list-item__img">
          <img
            src="https://images.unsplash.com/photo-1484659619207-9165d119dafe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            alt=""
          />
        </div>
        <div className="restaurant-list-item__desc">
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

export default RestuarantListItem;
