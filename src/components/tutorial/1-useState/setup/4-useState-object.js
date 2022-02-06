import React, { useState } from "react";

const UseStateObject = () => {
  const [persons, setPerosn] = React.useState({
    name: "uma",
    age: 23,
    message: "Hello Ram",
  });
  const changeMessageHandler=()=>{
      setPerosn({...persons,message:'Ram Ram JI',mobile:90})
  }
  return (
    <React.Fragment>
      <h2>useState object example</h2>
      <h5>name:{persons.name}</h5>
      <h5>age:{persons.age}</h5>
      <h5>message:{persons.message}</h5>
      <h5>mobile:{persons.mobile}</h5>
      <button type="btn" className="btn btn-danger" style={{backgroundColor:'orange', color:'black'}} onClick={changeMessageHandler}>Change Messsage</button>
    </React.Fragment>
  );
};

export default UseStateObject;
