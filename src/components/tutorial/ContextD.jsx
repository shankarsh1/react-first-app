import React, { Component } from "react";
import { Button } from "react-bootstrap";
import HocClickCounter from "./HocClickCounter";
import HocHoverCounter from "./HocHoverCounter";
import { ContextEmployeeProvider } from "./ContextA";
class ContextD extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    const { count } = this.state;
    return (
      <>
        <ContextEmployeeProvider.Consumer>
          {(name) => {
            return <div>{name}</div>;
          }}
        </ContextEmployeeProvider.Consumer>
        D <br />
      </>
    );
  }
}

export default ContextD;
