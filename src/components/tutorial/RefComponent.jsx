import axios from "axios";
import React, { PureComponent, Component } from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import RefComponentOne from "./RefComponentOne";

class RefComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "morpheus",
      job: "leader",
      count_increment: 0,
    };
    this.parentInputRef = React.createRef();
    this.inputTitleRef = React.createRef();
  }

  componentDidMount() {
    this.inputTitleRef.current.style = "background-color:pink";
    this.inputTitleRef.current.focus();
    this.inputTitleRef.current.value = "1";
  }

  assignRefHandler = () => {
    console.log("incrementHandler");
    this.parentInputRef.current.focusInput();
  };

  render() {
    console.log("render");
    return (
      <div>
        <RefComponentOne ref={this.parentInputRef} />
        <Button variant="primary" onClick={() => this.assignRefHandler()}>
          {this.props.title}
        </Button>
        <br />
        <input type="text" name="age" ref={this.inputTitleRef} />
      </div>
    );
  }
}

RefComponent.propTypes = {
  title: PropTypes.string,
};

RefComponent.defaultProps = {
  title: "post user data",
};

export default RefComponent;
