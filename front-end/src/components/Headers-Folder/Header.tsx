import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="w-full">
      <header className=" shadow-md flex items-center justify-center bg-white xl2:py-3 xl:py-3 lg:py-3 md:py-3 sm:py-3 xs:py-3">
        <Fade>
          <Link to="/feed">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white flex justify-center">
              postiiD
            </h3>
          </Link>
        </Fade>
      </header>
    </div>
  );
}

export default Header;
