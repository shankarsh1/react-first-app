import React, { useRef } from "react";
import ErrorBoundary from "../ErrorBoundary";
import A from "./A";
import Callback from "./Callback";
import FetchHook from "./FetchHook";
import Imperative from "./Imperative";
import Index from "./Index";
import { LoginForm } from "./LoginForm";
import MemoUse from "./MemoUse";
import { PostForm } from "./PostForm";
import ReducerCount from "./ReducerCount";
import RefUse from "./RefUse";

export const IndexHook = () => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h3>Index Hooks</h3>
        <ErrorBoundary>
          {/*  <Index /> */}
          {/* <ReducerCount />
          <MemoUse /> */}
          {/* <Callback /> */}
          {/* <RefUse /> */}
          {/* <Imperative /> */}
          {/* <LoginForm /> */}
          {/* <PostForm /> */}
          {/* <A /> */}
          <FetchHook />
        </ErrorBoundary>
      </div>
    </>
  );
};
