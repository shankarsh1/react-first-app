import axios from "axios";
import React, { PureComponent, Component } from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

class RefComponentOne extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "morpheus",
      job: "leader",
      count_increment: 0,
    };
    this.inputTitleRef = React.createRef();
    this.inputAgeRef = React.createRef();
  }

  focusInput = () => {
    console.log(this.inputTitleRef.current, this.inputAgeRef.current);
    this.inputTitleRef.current.style = "background-color:pink";
    this.inputTitleRef.current.focus();
    this.inputAgeRef.current.style = "background-color:orange";
    //this.inputAgeRef.current.focus();
    this.inputAgeRef.current.value = "1";
  };
  render() {
    return (
      <div>
        <input type="text" name="title" ref={this.inputTitleRef} />
        <input type="text" name="age" ref={this.inputAgeRef} />
      </div>
    );
  }
}

export default RefComponentOne;
