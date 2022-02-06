import React, { useState } from "react";

const UseStateCounter = () => {
  const [counter, setCounter] = useState(0);

  const resetHandler = () => {
    setCounter(0);
  };
  const complexIncrease = () => {
    console.log("clicked");
    setTimeout(() => {
      //setCounter(counter + 1);
      setCounter((prevValue) => {
        return prevValue + 1;
      });
    }, 2000);
  };

  return (
    <React.Fragment>
      <h2>useState counter example</h2>
      <section style={{ margin: "4rem 0" }}>
        <h2>regular counter</h2>
        <h1>{counter}</h1>
        <button className="btn" onClick={() => setCounter(counter - 1)}>
          decrease
        </button>
        <button className="btn" onClick={resetHandler}>
          reset
        </button>
        <button className="btn" onClick={() => setCounter(counter + 1)}>
          increase
        </button>
      </section>
      <section style={{ margin: "4rem 0" }}>
        <h2>more complex counter</h2>
        <h1>{counter}</h1>
        <button className="btn" onClick={complexIncrease}>
          increase later
        </button>
      </section>
    </React.Fragment>
  );
};

export default UseStateCounter;
