import React, { Component } from "react";

class Second extends Component {
  componentWillUnmount() {
    console.log("Second componentWillUnmount");
  }
  render() {
    return <div>Second Component</div>;
  }
}

export default Second;
