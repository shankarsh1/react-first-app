import React, { Component } from "react";
import PropTypes from "prop-types";
class MountingB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
    };

    console.log("MountingB call constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("MountingB call getDerivedFromState");
    //console.log(`${props}    ${state}`);
    return { ...state, last_name: props.last_name };
  }

  /* componentWillMount() {
    console.log("MountingB call componentWillMount");
  }*/

  /*componentWillReceiveProps(nextProps) {
    console.log("MountingB call componentWillReceiveProps");
  }*/

  /* componentWillUpdate(nextProps, nextState) {
    console.log("MountingB call componentWillUpdate");
  }*/

  /*componentWillUnmount() {
    console.log("MountingB call componentWillUnmount");
  } */

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("MountingB call componentDidUpdate");
    console.log(prevProps, prevState, snapshot.y);
  }

  shouldComponentUpdate(nextProps, shouldComponentUpdate) {
    console.log(
      nextProps,
      shouldComponentUpdate,
      "MountingB call shouldComponentUpdate"
    );
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(prevProps, prevState, "MountingB call getSnapshotBeforeUpdate");
    return { x: "", y: 10 };
  }
  render() {
    console.log("MountingB call render");
    return (
      <div>
        Component MountingB <br />
        {this.state.last_name}
      </div>
    );
  }
}

MountingB.propTypes = {};

export default MountingB;
