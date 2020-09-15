import React, { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();

    //#1
    this.cbRef = null;

    //#2
    this.setCbRef = (element) => {
      this.cbRef = element;
    };
  }

  componentDidMount() {
    //#4
    if (this.cbRef) {
      this.cbRef.focus();
      console.log(this.cbRef);
    }
    // this.inputRef.current.focus();
    // console.log(this.inputRef);
  }

  clickHandler = () => {
    // alert(this.inputRef.current.value);
    alert(this.cbRef.value);
  };
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        {/* #3 */}
        <input type="text" ref={this.setCbRef} />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default RefsDemo;
