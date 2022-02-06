import PropTypes from "prop-types";
import React, { Component } from "react";

export class ToggleClassChild extends Component {
    static propTypes = {};
    componentWillUnmount() {
        console.info("componentWillUnmount");
    }
    render() {
        return <div>Added Chld toggle</div>;
    }
}

export default ToggleClassChild;
