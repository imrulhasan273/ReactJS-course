import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);

    // #1 step
    this.inputRef = React.createRef();
  }

  // #3 step -- this functon will be called from Parent Component
  focusInput() {
    this.inputRef.current.focus();
  }
  render() {
    return (
      <div>
        {/* #2 step */}
        <input type="test" ref={this.inputRef} />
      </div>
    );
  }
}

export default Input;
