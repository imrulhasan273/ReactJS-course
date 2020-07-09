import React, { Component } from "react";

class counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increament() {
    //// this.state.count = this.state.count + 1; //it should never be used
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log("Callback value: ", this.state.count);
    //   }
    // );

    this.setState(
      (prevState, props) => ({
        count: prevState.count + 1,
      }),
      () => {
        console.log("Callback value: ", this.state.count);
      }
    );
    console.log(this.state.count);
  }

  increamentFive() {
    this.increament();
    this.increament();
    this.increament();
    this.increament();
    this.increament();
  }

  render() {
    return (
      <div>
        <div>count - {this.state.count}</div>
        <button onClick={() => this.increament()}>Increament</button>
        <br></br>
        <button onClick={() => this.increamentFive()}>IncreamentFive</button>
      </div>
    );
  }
}

export default counter;
