import { Link } from "react-router-dom";
function DatingAboutMe() {
  return (
    <>
      <div className="flex flex-col justify-center items-center 2xl:pt-10 xl:pt-10 lg:pt-6 xs:pt-10">
        <h1 className="2xl:text-2xl xl:text-2xl lg:text-xl md:text-lg font-medium">
          Let's upload some photos
        </h1>
        <div className="flex flex-col items-center 2xl:py-10 xl:py-10 lg:py-6 xs:py-4">
          <h2 className="2xl:text-base xl:text-base lg:text-sm md:text-sm sm:text-xs xs:text-xs">
            That photo of you on the beach or the boozy brunch you just went to?
          </h2>
          <h3 className="2xl:text-base xl:text-base lg:text-sm md:text-sm sm:text-xs xs:text-xs">
            Now's the time to show it off
          </h3>
        </div>

        <div className="max-w-xl">
          <label className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
            <span className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <span className="font-medium text-gray-600">
                Drop files to Attach, or
                <span className="text-blue-600 underline pl-1">browse</span>
              </span>
            </span>
            <input type="file" name="file_upload" className="hidden" />
          </label>
        </div>
        <Link to="/dating/main">
          <div className="pt-8 w-full">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Submit
              </span>
            </button>
          </div>
        </Link>
      </div>
    </>
  );
}

export default DatingAboutMe;
