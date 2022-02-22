import React, { useEffect, useMemo, useReducer, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
const RefUse = ({ getItems }) => {
    const [items, setItem] = useState([]);
    const inputRefEl = useRef(null);
    function refInputHandler(params) {
        inputRefEl.current.style.color = "red";
        inputRefEl.current.style.backGroundColor = "red";
        inputRefEl.current.value = "Uma Shankar";
        //inputRefEl.current.style.display = "none";
        inputRefEl.current.focus();
    }
    return (
        <div>
            UseRef
            <input ref={inputRefEl} type="text" />
            <button onClick={refInputHandler}>Change Input</button>
        </div>
    );
};

RefUse.propTypes = {};

export default RefUse;
