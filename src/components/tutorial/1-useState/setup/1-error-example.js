import React from "react";

//const [name, setName] = React.useState("Hi Uma");
let name = "uma";
function handlerClick() {
  name = "uma shankar";
  console.warn(name);
}

const ErrorExample = () => {
  return (
    <React.Fragment>
      <h2>useState error example</h2>
      <p>{name}</p>
      <button type="btn" className="btn" onClick={() => handlerClick()}>
        Click me
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
