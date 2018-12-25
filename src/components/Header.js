import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="border-bottom d-flex justify-content-between">
        <h1>{this.props.title}</h1>
        <a href="/" class="btn btn-primary float-right">Back To Home</a>
      </header>
    );
  }
}

export default Header;
