import React, { useState } from "react";
import { Button } from "react-bootstrap";
function countInit() {
  console.log("constructor");
  return 0;
}
const Todo = () => {
  // const [count, setCount] = useState(countInit());
  const [state, setState] = useState({ count: 0, title: "Increment" });
  const count = state.count;
  const title = state.title;
  const [content, setContent] = useState("Content");

  const increment = () => {
    /*  setCount((prevCount) => {
      console.log(prevCount);
      return prevCount + 1;
    }); */

    setState((prevState) => {
      return { ...prevState, title: "Increment", count: prevState.count + 1 };
    });
  };
  const decrement = () => {
    /* setCount((prevCount) => {
      return prevCount - 1;
    }); */
    setState((prevState) => {
      return { ...prevState, title: "Decrement", count: prevState.count - 1 };
    });
  };
  return (
    <>
      <div>
        <span>{title}</span>
        <br></br>
        <Button variant="success" onClick={increment}>
          +
        </Button>
        &nbsp;&nbsp;{count}&nbsp;&nbsp;
        <Button variant="danger" onClick={decrement} onMouseOver={decrement}>
          -
        </Button>
      </div>
      <div>
        <Button variant="success" onClick={() => setContent("posts")}>
          posts
        </Button>
        <Button variant="success" onClick={() => setContent("users")}>
          users
        </Button>
        <Button variant="success" onClick={() => setContent("comments")}>
          comments
        </Button>
        <span>{content}</span>
        <br></br>
      </div>
    </>
  );
};

export default Todo;
