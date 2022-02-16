import React, { Component } from "react";
import First from "./First";
import Second from "./Second";

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggle: false };

    if (this.props.name === "Shankar") {
      throw new Error("Some thing went wrong");
    }
  }

  toggleHandler = (param) => {
    this.setState({ isToggle: !this.state.isToggle });
  };
  render() {
    return (
      <div>
        Parent Component
        <br />
        {this.state.isToggle ? (
          <First>
            <First />
          </First>
        ) : (
          <Second />
        )}
        <br />
        <button
          className="btn btn-primary"
          onClick={() => this.toggleHandler()}
        >
          toggle
        </button>
      </div>
    );
  }
}

export default Parent;
