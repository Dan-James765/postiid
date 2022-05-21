import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

function HeaderPostLogin() {
  //The Header is pushing down with apdding - this may come back and bite you in the but so CHECK in the future!
  return (
    <div className="w-full pb-14">
      <header className="fixed w-full z-10 top-0 shadow-lg flex items-center justify-center bg-white xl2:py-3 xl:py-3 lg:py-3 md:py-3 sm:py-3 xs:py-3">
        <Fade>
          <Link to="/feed">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
              className="h-6 w-6 xl:h-8 xl:w-8 2xl:h-8 2xl:w-8 rounded-full"
              alt=""
            />
          </Link>
        </Fade>
      </header>
    </div>
  );
}

export default HeaderPostLogin;
