import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: ''
  }

  inputChanged = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  submitForm = (event) => {
    event.preventDefault()
    this.props.store.dispatch({
      type: "CREATE_REVIEW",
      payload: {
                review: this.state.text,
                restaurant: this.props.restaurant
              }
    })
    this.setState({ text: ''})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <input type="text" onChange={this.inputChanged} value={this.state.text}/>
        </form>
        <Reviews reviews={this.props.restaurant.reviews} restaurant={this.props.restaurant} store={this.props.store}/>
      </div>
    );
  }
};
export default ReviewInput;
