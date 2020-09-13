import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  //first method
  constructor(props) {
    super(props);

    this.state = {
      name: "Laravel",
      count: 1,
    };
    console.log("LifeCycleA Constructor");
  }

  //2nd method_________+________ Update --#1
  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleA getDerivedStateFromProps");
    return null;
  }

  //4th method
  componentDidMount() {
    console.log("LifeCycleA componentDidMount");
  }

  //________________ Update -- #2
  shouldComponentUpdate() {
    console.log("LifeCycleA shouldComponentUpdate");
    return true;
  }

  //________________ Update -- #4
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycleA getSnapshotBeforeUpdate");
    return null;
  }

  //________________ Update --  #5
  componentDidUpdate() {
    console.log("LifeCycleA componentDidUpdate");
  }

  changeState = () => {
    this.setState((prevState, props) => ({
      name: "ReactJS",
      count: prevState.count + 1,
    }));
  };
  //3rd method ________+________ Update -- #3
  render() {
    console.log("LifeCycleA render");
    return (
      <div>
        <div>Lifecycle A</div>
        <div>
          Name: {this.state.name} : Count: {this.state.count}
        </div>
        <button onClick={this.changeState}>Change State</button>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;
