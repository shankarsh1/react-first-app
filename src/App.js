import React from "react";
import "./App.css";
import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";
import MainContent from "./components/partials/MainContent";
import Main from "./components/partials/Main";
import PageNotFound from "./components/partials/PageNotFound";
import Index from "./components/Expenses/Index";
/* import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TutorialIndex from "./components/tutorial/TutorialIndex";
import Contact from "./components/partials/Contact";
function App() {
  return (
    <React.Fragment>
      <Router>
        {/* <Header /> */}
        <MainContent>
          <Routes>
            <Route exact path="/" element={<Header />}>
              <Route index element={<Main />} />
              <Route exact path="/expenses" element={<Index />} />
              <Route exact path="/tutorial" element={<TutorialIndex />} />
            </Route>
            <Route exact path="/admin" element={<Header />}>
              <Route element={<Main />} />
              <Route path="expenses" element={<Index />} />
              <Route path="tutorial/:id" element={<TutorialIndex />} />
            </Route>
            {/* <Route exact path="/expenses" element={<Index />} />
            <Route exact path="/tutorial" element={<TutorialIndex />} /> */}
            <Route exact path="/contact/*" element={<Header />}>
              <Route exact path="/contact/*" element={<Contact />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </MainContent>
        {/*  <Footer /> */}
      </Router>
    </React.Fragment>
  );
}

export default App;
