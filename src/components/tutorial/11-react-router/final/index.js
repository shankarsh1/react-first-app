import React from 'react';
// react router
/* import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; */
import { Route, Routes } from "react-router-dom";
// pages
import Home from './Home';
import About from './About';
import People from './People';
import Error from './Error';
import Person from './Person';
// navbar
import Navbar from './Navbar';
const ReactRouterSetup = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>

        <Route exact path="/tutorial/" element={<Home />} />
        <Route path="/tutorial/about" element={<About />} />
        <Route path="/tutorial/people" element={<People />} />
        <Route path="/tutorial/person/:id" element={<Person />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {/* <Routes>
        <Navbar />
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/people'>
          <People />
        </Route>
        <Route path='/person/:id' children={<Person />}></Route>
        <Route path='*'>
          <Error />
        </Route>
      </Routes> */}

      {/* <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/people'>
          <People />
        </Route>
        <Route path='/person/:id' children={<Person />}></Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router> */}
    </React.Fragment>

  );
};

export default ReactRouterSetup;
