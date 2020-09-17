import React, { Component } from "react";
import withCounter from "./withCounter"; //added

class HoverCounter extends Component {
  render() {
    const { count, increamentCount } = this.props;
    return (
      <div>
        <h2 onMouseOver={increamentCount}> Hover {count} Times</h2>
      </div>
    );
  }
}

export default withCounter(HoverCounter); //added
