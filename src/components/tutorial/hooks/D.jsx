import React, { useContext, useState } from "react";
import { Data } from "./A";
const D = () => {
  const firstName = useContext(Data);
  return (
    <>
      <div>D</div>
      {firstName}
    </>
  );
};

export default D;
