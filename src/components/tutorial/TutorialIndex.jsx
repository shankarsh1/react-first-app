import React from "react";
import ErrorExample from "../tutorial/1-useState/setup/1-error-example";
import UseStateBasics from "../tutorial/1-useState/setup/2-useState-basics";
import UseStateArray from "../tutorial/1-useState/setup/3-useState-array";
import UseStateObject from "../tutorial/1-useState/setup/4-useState-object";
import UseStateCounter from "../tutorial/1-useState/setup/5-useState-counter";
import ContactClassForm from "./ContactClassForm";
import ContactForm from "./ContactForm";
import HigherOrder from "./HigherOrder";
import Layout from "./Layout";
import LoadBackground from "./LoadBackground";
import Toggle from "./Toggle";
function TutorialIndex() {
  return (
    <React.Fragment>
      <div className="container">
        <h2>Advanced Tutorial On Final Stage</h2>
        {/* <ErrorExample /> */}
        {/* <UseStateBasics /> */}
        {/* <UseStateArray /> */}
        {/* <UseStateObject/> */}
        {/* <UseStateCounter/> */}

        {/* <Toggle/> */}
        {/*  <ContactForm /> */}
        {/* <ContactClassForm /> */}
        {/* <LoadBackground /> */}
        {/* <Layout/> */}
        <HigherOrder />
      </div>
    </React.Fragment>
  );
}

export default TutorialIndex;
