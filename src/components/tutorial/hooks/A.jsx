import React, { createContext, useState } from "react";
import B from "./B";
const Data = createContext();
const A = () => {
  return (
    <>
      <div>
        <Data.Provider value="Uma Shankar">
          A
          <B />
        </Data.Provider>
      </div>
    </>
  );
};

export default A;
export { Data };
