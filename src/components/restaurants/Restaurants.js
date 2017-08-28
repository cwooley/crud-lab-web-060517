import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  makeRestaurants = () => {
      return this.props.store.getState().restaurants.map((restaurant) => <Restaurant restaurant={restaurant} store={this.props.store} />)
  }

  render() {
    return(
      <ul>
        {this.makeRestaurants()}
      </ul>
    );
  }
};

export default Restaurants;
