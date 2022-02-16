import React, { Component } from "react";

class First extends Component {
  constructor() {
    super();
  }
  componentWillUnmount() {
    console.log("First componentWillUnmount");
  }
  render() {
    return <div>{this.props.children}First Component</div>;
  }
}

export default First;
