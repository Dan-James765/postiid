import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorPage from "../components/Login-SignUpFolders/ErrorPage-Folder/ErrorPage";
import LoginPage from "../components/Login-SignUpFolders/Login-Folder/Login-Page";
import SignUpPage from "../components/Login-SignUpFolders/Sign-Up-Folder/SignUpPage";
import FeedContainer from "../components/Feeds-Folder/FeedContainer";
import Header from "../components/Headers-Folder/Header";
import DatingLogin from "../components/Dating-Folder/DatingLogin";
import DatingAboutMe from "../components/Dating-Folder/DatingAboutMe";
import DatingMainContainer from "../components/Dating-Folder/DatingMainContainer";

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
            path="/dating/registration"
            element={
              <>
                <Header />
                <DatingLogin />
              </>
            }
          />
          <Route
            path="/dating/registration/about-me"
            element={
              <>
                <Header />
                <DatingAboutMe />
              </>
            }
          />
          <Route
            path="/dating/main"
            element={
              <>
                <DatingMainContainer />
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
