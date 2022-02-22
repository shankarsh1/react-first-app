import React, { forwardRef, useEffect, useImperativeHandle, useMemo, useReducer, useState } from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
const ImperativeChild = forwardRef(({ getItems }, ref) => {
    const [items, setItem] = useState([]);
    const [count, setCount] = useState(0);
    useImperativeHandle(ref, () => ({
        increment
    }))
    const increment = () => {
        setCount(count + 1);
    }
    useEffect(() => {
        setItem(getItems(5))
    }, [getItems])
    return (
        <div>
            Use Imperative Child
            {items && items.map((item, itemKey) => {
                return <div key={itemKey}>{item}</div>
            })}
            <br /><div>{count}</div><br />
            <button className="btn btn-danger" onClick={increment}>Increment</button>
        </div>
    );
});

ImperativeChild.propTypes = {};

export default ImperativeChild;
