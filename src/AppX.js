import React from "react";
import "./App.css";
import { BHeader } from "bootstrap-4-react/lib/components/dom";
/* import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "bootstrap-4-required/src/css/bootstrap.css"; */
/* import "bootstrap-4-required/src/js/bootstrap.js";
import "bootstrap-4-required/src/js/jquery.js";
import "bootstrap-4-required/src/js/proper.js"; */
import "bootstrap-4-required/src/index.js";
import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";
import Main from "./components/partials/Main";

/* import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Main />} />
          {/* <Route exact path="/login" element={<Login/>}/>
          <Route path="*" element={<NotFound/>}/> */}
        </Routes>
        <Footer />
      </Router>
      {/* <Router>
        <Header title="My Todos List" searchBar={false} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <AddTodo addTodo={addTodo} />
                  <Todos todos={todos} onDelete={onDelete} />
                </>
              );
            }}
          ></Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router> */}
      {/* <Header />
      <Main />
      <Footer /> */}
    </React.Fragment>
  );
}

export default App;
