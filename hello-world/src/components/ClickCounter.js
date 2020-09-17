import React, { Component } from "react";
import withCounter from "./withCounter"; //added for HOC

class ClickCounter extends Component {
  render() {
    const { count, increamentCount } = this.props;
    return (
      <div>
        <button onClick={increamentCount}>
          {this.props.name} Click {count} Times
        </button>
      </div>
    );
  }
}

export default withCounter(ClickCounter, 5); //added
