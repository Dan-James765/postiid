import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorPage from "../components/Login-SignUpFolders/ErrorPage-Folder/ErrorPage";
import LoginPage from "../components/Login-SignUpFolders/Login-Folder/Login-Page";
import SignUpPage from "../components/Login-SignUpFolders/Sign-Up-Folder/SignUpPage";
import FeedContainer from "../components/Feeds-Folder/FeedContainer";
import Header from "../components/Headers-Folder/Header";
import DatingLogin from "../components/Dating-Folder/Dating-Reg/DatingLogin";
import DatingAboutMe from "../components/Dating-Folder/Dating-Reg/DatingAboutMe";
import DatingMainContainer from "../components/Dating-Folder/DatingMain/DatingMainContainer";
import DatingAboutPostiid from "../components/Dating-Folder/Dating-Reg/DatingAboutPostiid";
import DatingEditProfile from "../components/Dating-Folder/Dating-EditFolder/DatingEditProfile";
import DatingEditContainer from "../components/Dating-Folder/Dating-EditFolder/DatingEditContainer";
import FeedSettingsContainer from "../components/Feeds-Folder/FeedSettingsContainer";

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
            path="/feed/settings"
            element={
              <>
                <FeedSettingsContainer />
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
            path="/dating/registration/about-postiid"
            element={
              <>
                <Header />
                <DatingAboutPostiid />
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
            path="/dating/main/edit-profile"
            element={
              <>
                <DatingEditContainer />
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
