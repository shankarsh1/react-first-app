import React from "react";
import ErrorExample from "../tutorial/1-useState/setup/1-error-example";
import UseStateBasics from "../tutorial/1-useState/setup/2-useState-basics";
import UseStateArray from "../tutorial/1-useState/setup/3-useState-array";
import UseStateObject from "../tutorial/1-useState/setup/4-useState-object";
import UseStateCounter from "../tutorial/1-useState/setup/5-useState-counter";
import UseEffectBasics from "../tutorial/2-useEffect/final/1-useEffect-basics";
import UseEffectCleanup from "../tutorial/2-useEffect/final/2-useEffect-cleanup";
import UseEffectFetchData from "../tutorial/2-useEffect/final/3-useEffect-fetch-data";
import Index from "../tutorial/6-useReducer/final/index";
import PropDrilling from "../tutorial/7-prop-drilling/final/1-prop-drilling";
import ContextAPI from "../tutorial/8-useContext/final/1-context-api";
import ContactClassForm from "./ContactClassForm";
import ContactForm from "./ContactForm";
import RefComponent from "./RefComponent";
import ErrorBoundary from "./ErrorBoundary";
import HigherOrder from "./HigherOrder";
import Layout from "./Layout";
import LoadBackground from "./LoadBackground";
import MountingA from "./MountingA";
import Parent from "./Parent";
import RefParent from "./RefParent";
import RandomUser from "./RandomUser";
/* import RefComponent from "./RefComponent"; */
import Toggle from "./Toggle";
import HocCounter from "./HocCounter";
import ContextA from "./ContextA";
import { IndexHook } from "./hooks/IndexHook";
import { useNavigate, useParams } from "react-router";
import { Button } from "react-bootstrap";
import MultipleReturns from "./3-conditional-rendering/final/1-multiple-returns";
import ShortCircuit from "./3-conditional-rendering/final/2-short-circuit";
import ShowHide from "./3-conditional-rendering/final/3-show-hide";
/* import ControlledInputs from "./4-forms/final/1-controlled-inputs"; */
import ControlledInputs from "./4-forms/final/2-multiple-inputs";
import Example from "./9-custom-hooks/final/1-fetch-example";
import useFetch from "./9-custom-hooks/final/2-useFetch";
import ReactRouterSetup from "./11-react-router/final/index";
function TutorialIndex() {
  const params = useParams()
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="container" style={{ textAlign: "center" }}>
        <h2 >
          Advanced Tutorial On Final Stage {params.id}
          <Button variant="success" onClick={() => { navigate('/expenses', { state: { name: 'Uma Shankar' } }) }}>Go expense</Button>
        </h2>
        {/* <ErrorExample /> */}
        {/* <UseStateBasics /> */}
        {/* <UseStateArray /> */}
        {/* <UseStateObject/> */}
        {/* <UseStateCounter/> */}
        {/* <UseEffectBasics /> */}
        {/* <UseEffectCleanup /> */}
        {/* <UseEffectFetchData /> */}
        {/* <MultipleReturns /> */}
        {/* <ShortCircuit /> */}
        {/* <ShowHide /> */}
        {/*  <ControlledInputs /> */}
        {/* <Index /> */}
        {/* <PropDrilling/> */}
        {/* <ContextAPI/> */}
        {/* <Example /> */}
        <ReactRouterSetup />
        {/* <UseRefBasics /> */}
        {/* <UseRefBasics /> */}
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
          {/* <IndexHook /> */}
        </ErrorBoundary>
      </div>
    </React.Fragment>
  );
}

export default TutorialIndex;
