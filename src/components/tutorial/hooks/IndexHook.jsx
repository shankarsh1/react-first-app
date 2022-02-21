import React from "react";
import ErrorBoundary from "../ErrorBoundary";
import A from "./A";
import Index from "./Index";
import MemoUse from "./MemoUse";
import ReducerCount from "./ReducerCount";

export const IndexHook = () => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h3>Index Hooks</h3>
        <ErrorBoundary>
          {/*  <Index /> */}
          <ReducerCount />
          <MemoUse />
          <A />
        </ErrorBoundary>
      </div>
    </>
  );
};
