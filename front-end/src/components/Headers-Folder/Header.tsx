import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="w-full">
      <header className=" shadow-md flex items-center justify-center bg-white xl2:py-3 xl:py-3 lg:py-3 md:py-3 sm:py-3 xs:py-3">
        <Fade>
          <Link to="/feed">
            <img
              src="https://cdn-static.findly.com/wp-content/uploads/sites/11/2015/02/CareersSite_FeaturedImage_Home_640x480.jpg"
              className="h-6 w-6 xl:h-8 xl:w-8 2xl:h-8 2xl:w-8 rounded-full"
              alt=""
            />
          </Link>
        </Fade>
      </header>
    </div>
  );
}

export default Header;
