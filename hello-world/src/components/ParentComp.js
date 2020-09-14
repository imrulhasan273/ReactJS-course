import React, { Component } from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";
import MemoComp from "./MemoComp";

export class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Imrul",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Imrul",
      });
    }, 2000);
  }

  render() {
    console.log(
      "*****************************Parent Component Rendering********************************"
    );
    return (
      <div>
        Parent Component
        {/* <RegComp name={this.state.name} /> */}
        {/* <PureComp name={this.state.name} /> */}
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
