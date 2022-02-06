import React, { useState } from "react";
import { data } from "../../data";
const UseStateArray = () => {
  const [persons, setPerson] = useState(data);
  const removeItemHandler = (id) => {
    const newPersons = persons.filter((person) => person.id != id);
    setPerson(newPersons);
  };
  return (
    <React.Fragment>
      <h2>useState array example</h2>
      {persons.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItemHandler(id)}>remove</button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPerson([])}>
        clear items
      </button>
    </React.Fragment>
  );
};

export default UseStateArray;

/* const UseStateArray = () => {
  return <h2>useState array example</h2>;
}; */
