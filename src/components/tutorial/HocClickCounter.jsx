import React, { Component } from "react";
import { Button } from "react-bootstrap";
import CounterLogic from "./CounterLogic";
class HocClickCounter extends Component {
  render() {
    const { count, incrementCountHandler, name } = this.props;
    return (
      <div>
        Hoc Click Counter Component
        <div>
          <Button variant="danger" onClick={() => incrementCountHandler()}>
            {name} Click {count} Counter
          </Button>
        </div>
      </div>
    );
  }
}

export default CounterLogic(HocClickCounter);
