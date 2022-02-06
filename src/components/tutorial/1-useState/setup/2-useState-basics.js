import React, { useState } from "react";
import PropTypes from "prop-types";

const UseStateBasics = (props) => {
  const [name, setName] = useState("Hello");

  const handlerClick = () => {
    if (name == "Hello") {
      setName("Hello uma");
    } else {
      setName("Hello");
    }
  };

  return (
    <React.Fragment>
      <h2>useState basic example</h2>
      <p>{name}</p>
      <button type="btn" className="btn" onClick={() => handlerClick()}>
        Click me
      </button>
    </React.Fragment>
  );
};

UseStateBasics.propTypes = {};

export default UseStateBasics;
