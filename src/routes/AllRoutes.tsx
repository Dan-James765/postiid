import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
} from "react-router-dom";
import Home from "../components/Home-Folder/Home";
import ErrorPage from "../components/ErrorPage-Folder/ErrorPage";
import LoginPage from "../components/Login-Folder/Login-Page";
import SignUpPage from "../components/Sign-Up-Folder/SignUpPage";

function AllRoutes() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default AllRoutes;
