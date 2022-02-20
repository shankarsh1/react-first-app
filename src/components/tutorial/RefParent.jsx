import React, { Component } from "react";
import { Button } from "react-bootstrap";
import First from "./First";
import RefChild from "./RefChild";
import Second from "./Second";

class ParentRef extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggle: false };

    if (this.props.name === "Shankar") {
      throw new Error("Some thing went wrong");
    }

    this.inputRef = React.createRef();
  }

  toggleHandler = (param) => {
    this.setState({ isToggle: !this.state.isToggle });
  };

  changeDomHandler = () => {
    this.inputRef.current.value = "Uma Shankar Sahu";
    this.inputRef.current.focus();
    this.inputRef.current.select();
  };

  render() {
    return (
      <div>
        ParentRef Component
        <br />
        <br />
        <RefChild ref={this.inputRef} />
        <br />
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
        <Button variant="info" onClick={() => this.changeDomHandler()}>
          Change Dom
        </Button>
      </div>
    );
  }
}

export default ParentRef;
