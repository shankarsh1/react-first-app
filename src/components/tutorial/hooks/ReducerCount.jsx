import React, { useReducer } from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
const initialState = {
  count: 0,
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
      return { ...state, count: state.count - 1 };
      break;
    default:
      return state;
      break;
  }
}
const ReducerCount = (props) => {
  const [state, dispatch] = useReducer(pureReducer, initialState);
  const count = state.count;
  return (
    <div>
      Reducer Count
      <br />
      <Button variant="success" onClick={() => dispatch({ type: "increment" })}>
        +
      </Button>
      &nbsp;&nbsp;{count}&nbsp;&nbsp;
      <Button variant="danger" onClick={() => dispatch({ type: "decrement" })}>
        -
      </Button>
      <br />
    </div>
  );
};

ReducerCount.propTypes = {};

export default ReducerCount;
