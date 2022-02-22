import React, { useEffect, useMemo, useReducer, useState } from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
const CallbackChild = ({ getItems }) => {
    const [items, setItem] = useState([]);
    useEffect(() => {
        setItem(getItems(5))
    }, [getItems])
    return (
        <div>
            Use Callback Child
            {items && items.map((item, itemKey) => {
                return <div key={itemKey}>{item}</div>
            })}
        </div>
    );
};

CallbackChild.propTypes = {};

export default CallbackChild;
