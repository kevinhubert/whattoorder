import React, { PureComponent } from 'react';
import './styles/ItemCard.css';

class ItemCard extends React.Component {
  render() {
    return (
      <div className="card item-card">
        <img
          className="card-img-top"
          src="https://images.unsplash.com/photo-1542528180-1c2803fa048c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.itemTitle}</h5>
          <p className="card-text">{this.props.itemDesc}</p>
          <a href="#" className="btn btn-primary">
            Reviews
          </a>
        </div>
      </div>
    );
  }
}

export default ItemCard;
