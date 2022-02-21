import React, { Component } from "react";
import { Button } from "react-bootstrap";
import ContextC from "./ContextC";
import HocClickCounter from "./HocClickCounter";
import HocHoverCounter from "./HocHoverCounter";

class ContextB extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    const { count } = this.state;
    return (
      <>
        B <br />
        <ContextC />
      </>
    );
  }
}

export default ContextB;
