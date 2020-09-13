import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  //first method
  constructor(props) {
    super(props);

    this.state = {
      name: "Imrul",
    };
    console.log("LifeCycleA Constructor");
  }

  //2nd method
  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleA getDerivedStateFromProps");
    return null;
  }

  //4th method
  componentDidMount() {
    console.log("LifeCycleA componentDidMount");
  }

  //3rd method
  render() {
    console.log("LifeCycleA render");
    return (
      <div>
        <div>Lifecycle A</div>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;
