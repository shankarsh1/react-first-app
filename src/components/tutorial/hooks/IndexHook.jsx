import React from "react";
import ErrorBoundary from "../ErrorBoundary";

export const IndexHook = () => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h3>Index Hooks</h3>
      </div>
      <ErrorBoundary></ErrorBoundary>
    </>
  );
};
