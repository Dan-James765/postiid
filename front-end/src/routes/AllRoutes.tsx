import ErrorPage from "../components/Login-SignUpFolders/ErrorPage-Folder/ErrorPage";
import LoginPage from "../components/Login-SignUpFolders/Login-Folder/Login-Page";
import SignUpPage from "../components/Login-SignUpFolders/Sign-Up-Folder/SignUpPage";
import Header from "../components/Headers-Folder/Header";
import DatingLogin from "../components/Dating-Folder/Dating-Reg/DatingLogin";
import DatingAboutMe from "../components/Dating-Folder/Dating-Reg/DatingAboutMe";
import DatingMainContainer from "../components/Dating-Folder/DatingMain/DatingMainContainer";
import DatingAboutPostiid from "../components/Dating-Folder/Dating-Reg/DatingAboutPostiid";
import DatingEditProfileContainer from "../components/Dating-Folder/Dating-SettingsFolder/DatingEditProfileContainer";
import DatingSettingsContainer from "../components/Dating-Folder/Dating-SettingsFolder/DatingSettingsContainer";
import DatingContactContainer from "../components/Dating-Folder/Dating-SettingsFolder/DatingContactContainer";
import FeedEditProfileSettingsContainer from "../components/Feeds-Folder/Feed-Settings-Folder/FeedEditProfileSettingsContainer";
import FeedChangePasswordSettingsContainer from "../components/Feeds-Folder/Feed-Settings-Folder/FeedChangePasswordSettingsContainer";
import FeedDeleteAccountSettingsContainer from "../components/Feeds-Folder/Feed-Settings-Folder/FeedDeleteAccountSettingsContainer";
import FeedLogOutSettingsContainer from "../components/Feeds-Folder/Feed-Settings-Folder/FeedLogOutSettingsContainer";
import FeedContainer from "../components/Feeds-Folder/Feed-Main-Folder/FeedContainer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
            path="/feed/settings/edit-profile"
            element={
              <>
                <FeedEditProfileSettingsContainer />
              </>
            }
          />
          <Route
            path="/feed/settings/edit-profile"
            element={
              <>
                <FeedEditProfileSettingsContainer />
              </>
            }
          />
          <Route
            path="/feed/settings/change-password"
            element={
              <>
                <FeedChangePasswordSettingsContainer />
              </>
            }
          />
          <Route
            path="/feed/settings/delete-account"
            element={
              <>
                <FeedDeleteAccountSettingsContainer />
              </>
            }
          />
          <Route
            path="/feed/settings/log-out"
            element={
              <>
                <FeedLogOutSettingsContainer />
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
            path="/dating/main/settings/edit-profile"
            element={
              <>
                <DatingEditProfileContainer />
              </>
            }
          />
          <Route
            path="/dating/main/settings/more-settings"
            element={
              <>
                <DatingSettingsContainer />
              </>
            }
          />
          <Route
            path="/dating/main/settings/contact"
            element={
              <>
                <DatingContactContainer />
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
