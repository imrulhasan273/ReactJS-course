import React, { Component } from "react";

class LifecycleB extends Component {
  //first method
  constructor(props) {
    super(props);

    this.state = {
      name: "Imrul",
    };
    console.log("LifeCycleB Constructor");
  }

  //2nd method
  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleB getDerivedStateFromProps");
    return null;
  }

  //4th method
  componentDidMount() {
    console.log("LifeCycleB componentDidMount");
  }

  //3rd method
  render() {
    console.log("LifeCycleB render");
    return <div>Lifecycle B</div>;
  }
}

export default LifecycleB;
