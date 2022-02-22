import React, { useMemo, useReducer } from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
const initialState = {
  count: 0,
  countTwo: 0,
  title: "Increment",
  items: [],
};
function pureReducer(state, action) {
  console.info(action, state);
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
const MemoUse = (props) => {
  const [state, dispatch] = useReducer(pureReducer, initialState);
  const count = state.count;
  const countTwo = state.countTwo;

  /* function isEven() {   
    for (let index = 0; index < 10; index++) {}
    return count % 2 === 0 ? "Even" : "Odd";
  } */

  const isEven = useMemo(() => {
    for (let index = 0; index <= 100000; index++) {
      console.log(index);
    }
    return count % 2 === 0 ? "Even" : "Odd";
  }, [count]);
  return (
    <div>
      Use Memo Count
      <br />
      <Button variant="success" onClick={() => dispatch({ type: "increment" })}>
        +
      </Button>
      &nbsp;&nbsp;{count} &nbsp;
      {countTwo} &nbsp; {isEven}&nbsp;&nbsp;
      <Button variant="danger" onClick={() => dispatch({ type: "decrement" })}>
        -
      </Button>
      <br />
    </div>
  );
};

MemoUse.propTypes = {};

export default MemoUse;
