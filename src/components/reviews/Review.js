import React, { Component } from 'react';

class Review extends Component {

  deleteBtnClicked = () => {
    this.props.store.dispatch({
      type: 'DELETE_REVIEW',
      payload: {
        restaurant: this.props.restaurant,
        review: this.props.text
      }
    })
  }

  render() {
    return (
      <li>
        {this.props.text}
        <button onClick={this.deleteBtnClicked}> delete </button>
      </li>
    );
  }
};

export default Review;
