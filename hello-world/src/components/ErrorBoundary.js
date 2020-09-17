import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  // tech #1
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  // tech #2
  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something Went Wrong</h1>;
    }
    return this.props.children; //this refers to the component we are actually rendering
  }
}

export default ErrorBoundary;
