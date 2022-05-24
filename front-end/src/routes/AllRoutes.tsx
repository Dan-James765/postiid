import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../components/Home-Folder/Home";
import ErrorPage from "../components/Login-SignUpFolders/ErrorPage-Folder/ErrorPage";
import LoginPage from "../components/Login-SignUpFolders/Login-Folder/Login-Page";
import SignUpPage from "../components/Login-SignUpFolders/Sign-Up-Folder/SignUpPage";
import FeedContainer from "../components/Feeds-Folder/FeedContainer";
import Header from "../components/Headers-Folder/Header";

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
                <FeedContainer />
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
