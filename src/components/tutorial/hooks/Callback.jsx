import React, { useCallback, useMemo, useReducer, useState } from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import CallbackChild from "./CallbackChild";
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
const Callback = (props) => {
    const [state, dispatch] = useReducer(pureReducer, initialState);
    const [countOne, setCountOne] = useState(0);
    const [countThree, setCountThree] = useState(0);
    const count = state.count;
    const countTwo = state.countTwo;

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
    return (
        <div>
            Use Call Back
            < br />
            <Button variant="success" onClick={() => dispatch({ type: "increment" })}>
                +
            </Button>
            &nbsp;&nbsp; {count} &nbsp;{isEven}&nbsp; {countTwo}&nbsp;&nbsp;
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

            <CallbackChild getItems={getItems} />
        </div >
    );
};

Callback.propTypes = {};

export default Callback;
