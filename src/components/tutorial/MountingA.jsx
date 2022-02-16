import React, { Component } from "react";
import PropTypes from "prop-types";
import MountingB from "./MountingB";
import { Button } from "react-bootstrap";
class MountingA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
    };

    console.log("MountingA call constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log(props, state, "MountingA call getDerivedFromState");
    //console.log(`${props}    ${state}`);
    if (state.first_name === "") {
      return { ...state, first_name: props.first_name };
    } else {
      return null;
    }
  }

  /* componentWillMount() {
    console.log("MountingA call componentWillMount");
  }*/

  componentDidMount() {
    console.log("MountingA call componentDidMount");
  }

  /*componentWillReceiveProps(nextProps) {
    console.log("MountingA call componentWillReceiveProps");
  }*/

  /* componentWillUpdate(nextProps, nextState) {
    console.log("MountingA call componentWillUpdate");
  } */

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("MountingA call componentDidUpdate");
    console.log(prevProps, prevState, snapshot.y);
  }

  shouldComponentUpdate(nextProps, shouldComponentUpdate) {
    console.log(
      nextProps,
      shouldComponentUpdate,
      "MountingA call shouldComponentUpdate"
    );
    return false;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(prevProps, prevState, "MountingA call getSnapshotBeforeUpdate");
    return { x: "", y: 10 };
  }
  /* componentWillUnmount() {
    console.log("MountingA call componentWillUnmount");
  } */
  changeState() {
    this.setState({ first_name: "Hi Uma" });
  }
  render() {
    console.log("MountingA call render");
    return (
      <div>
        <Button variant="primary" onClick={() => this.changeState()}>
          MountingA change state
        </Button>
        <br />
        Component MountingA <br />
        {this.state.first_name}
        <MountingB first_name={this.state.first_name} last_name="Shankar" />
      </div>
    );
  }
}

MountingA.propTypes = {};

export default MountingA;
