import React, { Component } from "react";
import { Button } from "react-bootstrap";
import ContextD from "./ContextD";
import HocClickCounter from "./HocClickCounter";
import HocHoverCounter from "./HocHoverCounter";

class ContextC extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    const { count } = this.state;
    return (
      <>
        C <br />
        <ContextD />
      </>
    );
  }
}

export default ContextC;
