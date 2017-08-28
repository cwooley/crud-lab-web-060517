import React, { Component } from 'react';

class RestaurantInput extends Component {
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
      type: "CREATE_RESTAURANT",
      payload: this.state.text
    })
    this.setState({ text: '' })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <input type="text" onChange={this.inputChanged} value={this.state.text}/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
