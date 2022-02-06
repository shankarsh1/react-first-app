import React, { useState } from "react";
import PropTypes from "prop-types";

const Toggle = (props) => {
    const [isToggle, setToggle] = useState(true);
    return (
        <div>
            {isToggle ? (
                <React.Fragment>
                    <h2>Toggle Show</h2>
                    <button className="btn btn-primary" onClick={() => setToggle(false)}>
                        Hide
                    </button>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <h2>Toggle Hide</h2>
                    <button className="btn btn-primary" onClick={() => setToggle(true)}>
                        Show
                    </button>
                </React.Fragment>
            )}            
        </div>
    );
};

Toggle.propTypes = {};

export default Toggle;
