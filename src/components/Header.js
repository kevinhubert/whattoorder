import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="border-bottom">
        <h1>{this.props.title}</h1>
        <button
          className="btn btn-primary"
          onClick={this.props.loadSampleRestaurants}
        >
          Load Sample Data
        </button>
      </header>
    );
  }
}

export default Header;
