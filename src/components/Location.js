import React from 'react';

class Location extends React.Component {
  locationInput = React.createRef();
  goToLocation = event => {
    event.preventDefault();
    const location = this.locationInput.current.value;
    this.props.history.push(`/restaurant/${location}`);
  };
  render() {
    return (
      <div>
        <form action="" onSubmit={this.goToLocation}>
          <h1>This is the location finder component</h1>
          <input
            ref={this.locationInput}
            type="text"
            placeholder="Where are you?"
          />
          <button type="submit" className="btn btn-primary">
            Find Restaurants
          </button>
        </form>
      </div>
    );
  }
}

export default Location;
