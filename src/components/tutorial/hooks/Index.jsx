import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
function countInit() {
  console.log("constructor");
  return 0;
}
const Index = () => {
  // const [count, setCount] = useState(countInit());
  const [state, setState] = useState({
    count: 0,
    title: "Increment",
    items: [],
  });
  const count = state.count;
  const title = state.title;
  const items = state.items;
  const [content, setContent] = useState("posts");

  useEffect(() => {
    console.log("Component did Mount");
  }, []);
  useEffect(() => {
    console.log("Component did Update " + content);
    fetch("https://jsonplaceholder.typicode.com/" + content)
      .then((response) => response.json())
      .then((json) => {
        setState({ ...state, items: json });
        console.log(state.items);
      });
    return () => {
      console.info("unmount");
    };
  }, [content]);
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
      <br></br>
      <div>
        <Button variant="success" onClick={() => setContent("posts")}>
          posts
        </Button>
        &nbsp;&nbsp;
        <Button variant="success" onClick={() => setContent("users")}>
          users
        </Button>
        &nbsp;&nbsp;
        <Button variant="success" onClick={() => setContent("comments")}>
          comments
        </Button>
        <br></br>
        <span>{content}</span>
        <br></br>
        <u>
          {items &&
            items.map((item, itemKey) => {
              return <li key={itemKey}>{item.id}</li>;
            })}
        </u>
      </div>
    </>
  );
};

export default Index;
