import React from 'react';

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to What To Order</h1>
        <a className="btn btn-primary" href="/restaurant/restaurant-here">
          Restaurant List
        </a>
      </div>
    );
  }
}

export default Welcome;
