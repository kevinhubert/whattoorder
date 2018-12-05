import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="border-bottom">
        <h1>{this.props.title}</h1>
      </header>
    );
  }
}

export default Header;
