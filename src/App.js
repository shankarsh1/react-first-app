import React from "react";
import "./App.css";
import "bootstrap-4-required/src/index.js";
import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";
import MainContent from "./components/partials/MainContent";
import Main from "./components/partials/Main";
import PageNotFound from "./components/partials/PageNotFound";
import Index from "./components/Expenses/Index";
/* import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TutorialIndex from "./components/tutorial/TutorialIndex";
function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <MainContent>
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/expenses" element={<Index />} />
            <Route exact path="/tutorial" element={<TutorialIndex />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </MainContent>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
