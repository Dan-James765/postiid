import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
} from "react-router-dom";
import Home from "../components/Home-Folder/Home";
import LandingPage from "../components/LP-Folder/LandingPage";
import ErrorPage from "../components/ErrorPage-Folder/ErrorPage";

function AllRoutes() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/landingpage" element={<LandingPage />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default AllRoutes;
