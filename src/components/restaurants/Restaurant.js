import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput'

class Restaurant extends Component {


  deleteBtnClicked = (event) => {
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id
    })
  }

  render(){
    return (
      <li>
        <h2>{this.props.restaurant.text}</h2>
        <button onClick={this.deleteBtnClicked} >Delete Restaurant</button>
        <h5>Reviews:</h5>
        <ReviewInput restaurant={this.props.restaurant} store={this.props.store}/>
      </li>
    );
  }
};

export default Restaurant;
