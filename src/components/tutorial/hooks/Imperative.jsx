import React, { useCallback, useEffect, useLayoutEffect, useMemo, useReducer, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import ImperativeChild from "./ImperativeChild";
import useLogger from "./useLogger";
const initialState = {
    count: 0,
    countTwo: 0,
    title: "Increment",
    items: [],
};
function pureReducer(state, action) {
    //console.info(action, state);
    switch (action.type) {
        case "increment":
            return { ...state, count: state.count + 1 };
            break;
        case "decrement":
            return { ...state, countTwo: state.countTwo - 1 };
            break;
        default:
            return state;
            break;
    }
}
const Imperative = (props) => {
    const [state, dispatch] = useReducer(pureReducer, initialState);
    const [countOne, setCountOne] = useState(0);
    const [countThree, setCountThree] = useState(0);
    const [title, setTitle] = useState('Uma Shankar');
    const count = state.count;
    const countTwo = state.countTwo;
    useLogger(title);
    const getItems = useCallback((num) => {
        console.log(countThree + num, countThree - num)
        for (let index = 0; index <= 100000000; index++) { }
        console.log('get items')
        return [countThree + num, countThree - num]
    }, [countThree]);
    const isEven = useMemo(() => {
        for (let index = 0; index <= 10000; index++) { }
        console.log('get OddEven use Memo')
        return count % 2 === 0 ? "Even" : "Odd";
    }, [count]);

    const ref = useRef();
    useEffect(() => {
        window.scrollBy(0, 50);
    })
    useLayoutEffect(() => {
        window.scrollBy(0, 500);
    })
    return (
        <div style={{
            height: '1000px'
        }}>
            Use Imperative
            < br />
            <Button variant="success" onClick={() => dispatch({ type: "increment" })}>
                +
            </Button>
            &nbsp;&nbsp; {count} &nbsp; {isEven}&nbsp; {countTwo}&nbsp;&nbsp;
            <Button variant="danger" onClick={() => dispatch({ type: "decrement" })}>
                -
            </Button>
            <br />
            < br />
            <Button variant="success" onClick={() => setCountOne(countOne + 1)}>
                +
            </Button>
            &nbsp;&nbsp; {countOne} &nbsp; {countThree}&nbsp;&nbsp;
            <Button variant="danger" onClick={() => setCountThree(countThree + 1)}>
                -
            </Button>
            <br />

            <ImperativeChild getItems={getItems} ref={ref} /><br />
            <Button variant="danger" onClick={() => ref.current.increment()}>Parent click Increment </Button>
            <br /><br /><br />
            <input type="text" value={title} name="title" onChange={(e) => setTitle(e.target.value)} />
        </div >
    );
};

Imperative.propTypes = {};

export default Imperative;
