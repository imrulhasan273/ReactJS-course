import React, { Component } from "react";

class RegComp extends Component {
  render() {
    console.log("Regular Component Rendering");
    return <div>Regular Component : {this.props.name}</div>;
  }
}

export default RegComp;
