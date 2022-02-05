import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
} from "react-router-dom";
import LandingPage from "../components/LP-Folder/LandingPage";
import ErrorPage from "./ErrorPage";

function RoutesP() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/landingpage" element={<LandingPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default RoutesP;
