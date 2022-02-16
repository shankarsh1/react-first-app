import React, { Component } from "react";
import PropTypes from "prop-types";

class Snapshot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      product: props.product,
      name: "first",
    };
    console.log(props.product);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ name: "last" });
    }, 3000);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return prevState.name;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    document.getElementById("prev").innerHTML = snapshot;
    document.getElementById("last").innerHTML = this.state.name;
  }

  render() {
    return (
      <div>
        <div id="prev"></div>
        <div id="last"></div>
        <br></br>

        <img height="50px" width="50px" src={this.state.product.image}></img>
      </div>
    );
  }
}

Snapshot.propTypes = {};

export default Snapshot;
