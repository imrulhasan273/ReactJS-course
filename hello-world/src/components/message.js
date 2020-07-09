import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome Visitor",
    };
  }

  changeMessage() {
    this.setState({
      message: "Thank you for subscribing",
    });
  }

  unsubscribe() {
    this.setState({
      message: "Unsubscribe Successfull",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
        <button onClick={() => this.unsubscribe()}>Unsubscribe</button>
      </div>
    );
  }
}

export default Message;
