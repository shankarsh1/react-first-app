import React, { Suspense, useState } from "react";
import "./App.css";
import Header from "./components/partials/Header";
import MainContent from "./components/partials/MainContent";
import Main from "./components/partials/Main";
import PageNotFound from "./components/partials/PageNotFound";
import Index from "./components/Expenses/Index";
/* import {Switch, Route } from "react-router-dom"; */
import { Route, Routes } from "react-router-dom";
import TutorialIndex from "./components/tutorial/TutorialIndex";
import Contact from "./components/partials/Contact";
import { Backend, BackendHome, BackendSetting } from "./components/backend/Index";
import Error from "./components/Error";
import { FrontendHeader, FrontendHome, FrontendAbout, ContactUs } from "./components/frontend/Index";
const LazyFrontendDashboard = React.lazy(() => import("./components/frontend/Dashboard"))
function App() {
  const [data, setDate] = useState({ isTutorial: true })
  return (
    <React.Fragment>
      {
        data.isTutorial
          ? <>
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
          </>
          : <>
            <Suspense fallback={<div></div>}>
              <Routes>
                <Route path="/" element={<FrontendHeader />}>
                  <Route index element={<FrontendHome />} />
                  <Route path="dashboard" element={<LazyFrontendDashboard />} />
                  <Route path="about" element={<FrontendAbout />} />
                  <Route path="contact-us" element={<ContactUs />} />
                </Route>
                <Route path="/client" element={<FrontendHeader />}>

                </Route>
                <Route path="/admin" element={<Backend />}>
                  <Route index element={<BackendHome />} />
                  <Route path="contact-us" element={<ContactUs />} />
                  <Route path="setting" element={<BackendSetting />} />
                </Route>
                <Route path="*" element={<Error />} />
              </Routes>
            </Suspense>
          </>
      }

    </React.Fragment>
  );
}

export default App;
