import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

function HigherOrder() {
    return <React.Fragment>
        <h1>HOC </h1>
        <HOCRed cmp={Counter} />
        <HOCGreen cmp={Counter} />
        <HOCBlue cmp={Counter} />
    </React.Fragment>;

}

function HOCRed(props) {
    return <h2 style={{ backgroundColor: 'red', width: 100 }}><props.cmp/></h2>
}
function HOCGreen(props) {
    return <h2 style={{ backgroundColor: 'green', width: 100 }}><props.cmp/></h2>
}
function HOCBlue(props) {
    return <h2 style={{ backgroundColor: 'pink', width: 100 }}><props.cmp/></h2>
}

function Counter() {
    const [count, setCount] = useState(0);
    return <div>
        <h3>{count}</h3>
        <Button onClick={() => setCount(count + 1)}>Click to update counter</Button>
    </div>
}
HigherOrder.propTypes = {};

export default HigherOrder;
