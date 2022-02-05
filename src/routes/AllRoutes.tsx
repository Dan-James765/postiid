import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../components/Home-Folder/Home";
import ErrorPage from "../components/ErrorPage-Folder/ErrorPage";
import LoginPage from "../components/Login-Folder/Login-Page";
import SignUpPage from "../components/Sign-Up-Folder/SignUpPage";
import Feed from "../components/Feed-Folder/Feed";
import Header from "../components/Header-Folder/Header";

function AllRoutes() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/login"
            element={
              <>
                <Header />
                <LoginPage />
              </>
            }
          />
          <Route
            path="/sign-up"
            element={
              <>
                <Header />
                <SignUpPage />
              </>
            }
          />
          <Route
            path="/feed"
            element={
              <>
                <Header />
                <Feed />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
            path="*"
            element={
              <>
                <Header />
                <ErrorPage />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default AllRoutes;
