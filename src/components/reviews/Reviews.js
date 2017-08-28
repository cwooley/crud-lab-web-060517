import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  makeReviews(){
    return this.props.reviews.map(review => <Review text={review} restaurant={this.props.restaurant} store={this.props.store} />)
  }
  render() {
    return (
      <ul>
        {this.makeReviews()}
      </ul>
    );
  }
};

export default Reviews;
