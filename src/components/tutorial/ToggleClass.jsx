import PropTypes from "prop-types";
import React, { Component } from "react";
import ToggleClassChild from "./ToggleClassChild";

export class ToggleClass extends Component {
    constructor() {
        super();
        this.state = { isToggle: true };
    }
    static propTypes = {};

    render() {
        return (
            <React.Fragment>
                <div className="row col-md-12">
                    {this.state.isToggle ? (
                        <ToggleClassChild />
                    ) : (
                        <div>Child toggle removed</div>
                    )}
                    <button
                        className="btn btn-info"
                        onClick={() => this.setState({ isToggle: !this.state.isToggle })}
                    >
                        {this.state.isToggle ? <div>Hide</div> : <div>show</div>}
                    </button>
                </div>
            </React.Fragment>
        );
    }
}

export default ToggleClass;
