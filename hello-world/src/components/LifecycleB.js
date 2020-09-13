import React, { Component } from "react";

class LifecycleB extends Component {
  //first method
  constructor(props) {
    super(props);

    this.state = {
      name: "Django",
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

  //________________ Update -- #2
  shouldComponentUpdate() {
    console.log("LifeCycleB shouldComponentUpdate");
    return true;
  }

  //________________ Update -- #4
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycleB getSnapshotBeforeUpdate");
    return null;
  }

  //________________ Update --  #5
  componentDidUpdate() {
    console.log("LifeCycleB componentDidUpdate");
  }

  //3rd method
  render() {
    console.log("LifeCycleB render");
    return <div>Lifecycle B</div>;
  }
}

export default LifecycleB;
