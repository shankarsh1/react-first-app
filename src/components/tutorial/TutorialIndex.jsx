import React from "react";
import ErrorExample from "../tutorial/1-useState/setup/1-error-example";
import UseStateBasics from "../tutorial/1-useState/setup/2-useState-basics";
import UseStateArray from "../tutorial/1-useState/setup/3-useState-array";
import UseStateObject from "../tutorial/1-useState/setup/4-useState-object";
import UseStateCounter from "../tutorial/1-useState/setup/5-useState-counter";
import ContactClassForm from "./ContactClassForm";
import ContactForm from "./ContactForm";
import ErrorBoundary from "./ErrorBoundary";
import HigherOrder from "./HigherOrder";
import Layout from "./Layout";
import LoadBackground from "./LoadBackground";
import MountingA from "./MountingA";
import Parent from "./Parent";
import RefParent from "./RefParent";
import RandomUser from "./RandomUser";
import RefComponent from "./RefComponent";
import Toggle from "./Toggle";
import HocCounter from "./HocCounter";
import ContextA from "./ContextA";
import { IndexHook } from "./hooks/IndexHook";
import { useNavigate, useParams } from "react-router";
import { Button } from "react-bootstrap";

function TutorialIndex() {
  const params = useParams()
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="container">
        <h2 style={{ textAlign: "center" }}>
          Advanced Tutorial On Final Stage {params.id}
          <Button variant="success" onClick={() => { navigate('/expenses', { state: { name: 'Uma Shankar' } }) }}>Go expense</Button>
        </h2>
        {/* <ErrorExample /> */}
        {/* <UseStateBasics /> */}
        {/* <UseStateArray /> */}
        {/* <UseStateObject/> */}
        {/* <UseStateCounter/> */}

        {/* <Toggle/> */}
        {/*  <ContactForm /> */}
        {/*  <ContactClassForm /> */}
        {/* <LoadBackground /> */}
        {/* <Layout/> */}
        {/* <HigherOrder /> */}
        {/*  <MountingA first_name="Uma" /> */}
        {/* <Parent name="Uma" />
        <ErrorBoundary>
          <Parent name="Shankar" />
        </ErrorBoundary> */}
        <ErrorBoundary>
          {/* <RandomUser /> */}
          {/* <RefComponent /> */}
          {/* <RefParent /> */}
          {/* <HocCounter /> */}
          {/* <ContextA /> */}
          <IndexHook />
        </ErrorBoundary>
      </div>
    </React.Fragment>
  );
}

export default TutorialIndex;
