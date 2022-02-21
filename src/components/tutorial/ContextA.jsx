import React, { Component } from "react";
import { Button } from "react-bootstrap";
import ContextB from "./ContextB";
import HocClickCounter from "./HocClickCounter";
import HocHoverCounter from "./HocHoverCounter";
const ContextEmployeeProvider = React.createContext();
class ContextA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      persons: [
        { id: 1, name: "uma" },
        { id: 2, name: "shankar" },
        { id: 3, name: "arpita" },
        { id: 4, name: "atharva" },
      ],
    };
  }

  render() {
    const { count } = this.state;
    return (
      <>
        <ContextEmployeeProvider.Provider value="Uma Shankar Sahu">
          A <br />
          <ContextB />
        </ContextEmployeeProvider.Provider>
      </>
    );
  }
}

export default ContextA;
export { ContextEmployeeProvider };
