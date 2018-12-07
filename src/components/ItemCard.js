import React from 'react';
import './styles/ItemCard.css';

class ItemCard extends React.Component {
  render() {
    const itemCardStyles = {
      marginBottom: '1rem',
      height: '250px'
    };
    const imageStyles = {
      backgroundImage: `url(${this.props.itemImage})`,
      backgroundSize: 'cover',
      height: '100px'
    };

    return (
      <div className="card item-card" style={itemCardStyles}>
        <div className="card-img-top" style={imageStyles} />
        <div className="card-body">
          <h5 className="card-title">{this.props.itemTitle}</h5>
          <p className="card-text">{this.props.itemDesc}</p>
        </div>
      </div>
    );
  }
}

export default ItemCard;
