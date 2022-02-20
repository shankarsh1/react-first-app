import React, { Component } from "react";
import { Button } from "react-bootstrap";
import HocClickCounter from "./HocClickCounter";
import HocHoverCounter from "./HocHoverCounter";

class HocCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    const { count } = this.state;
    return (
      <>
        <HocHoverCounter name="Uma" />
        <br />
        <HocClickCounter name="Shankar" />
      </>
    );
  }
}

export default HocCounter;
