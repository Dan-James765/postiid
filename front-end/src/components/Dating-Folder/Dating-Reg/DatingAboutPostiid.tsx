import { Link } from "react-router-dom";
import { AiOutlineClockCircle } from "react-icons/ai";

function DatingAboutPostiid() {
  return (
    <>
      <div className="flex flex-col justify-center items-center 2xl:pt-10 xl:pt-10 lg:pt-6 xs:pt-10">
        <h1 className="2xl:text-2xl xl:text-2xl lg:text-xl md:text-lg font-medium">
          postiiD for the weekend
        </h1>
        <div className="max-w-xl pt-11 pb-2">
          <AiOutlineClockCircle className="text-6xl text-gray-400" />
        </div>
        <div className="flex flex-col items-center 2xl:pb-6 xl:pb-6 lg:pb-6 xs:pb-4">
          <h2 className="2xl:text-base xl:text-base lg:text-sm md:text-sm sm:text-xs xs:text-xs">
            postiiD dating is open exclusively on Friday, Saturday & Sunday.
          </h2>
          <h3 className="2xl:text-base xl:text-base lg:text-sm md:text-sm sm:text-xs xs:text-xs">
            So get swiping and sending messages already!
          </h3>
        </div>

        <Link to="/dating/main">
          <div className="pt-8 w-full">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Let's Go!
              </span>
            </button>
          </div>
        </Link>
      </div>
    </>
  );
}

export default DatingAboutPostiid;
