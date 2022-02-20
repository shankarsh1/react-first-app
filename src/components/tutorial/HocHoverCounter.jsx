import React, { Component } from "react";
import { Button } from "react-bootstrap";
import CounterLogic from "./CounterLogic";
class HocHoverCounter extends Component {
  render() {
    const { count, incrementCountHandler, name } = this.props;
    return (
      <div>
        Hoc Hover Counter Component
        <div>
          <Button variant="info" onMouseOver={() => incrementCountHandler()}>
            {name} Hover {count} Counter
          </Button>
        </div>
      </div>
    );
  }
}

export default CounterLogic(HocHoverCounter);
