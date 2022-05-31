import { Link } from "react-router-dom";
function DatingLogin() {
  return (
    <>
      <div>
        <div className="flex justify-center 2xl:pt-10 xl:pt-10 lg:pt-6 xs:pt-10">
          <div className="2xl:w-96 xl:w-96 lg:w-96 sm:p-6">
            <form className="space-y-6" action="#">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                className="hover:bg-slate-100 cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white focus:outline-gray-400"
                placeholder="Dan James"
                required={true}
              />
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Age
              </label>
              <input
                type="number"
                name="age"
                id="age"
                className="hover:bg-slate-100 cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white focus:outline-gray-400"
                placeholder="18+"
                required={true}
              />
              <h1 className="font-light text-gray-500 text-sm">
                You must be at least 18 years old to use postiiD dating{" "}
              </h1>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Age Range
              </label>
              <div className="flex gap-x-2">
                <input
                  type="number"
                  name="ageRange"
                  id="ageRange"
                  className="hover:bg-slate-100 cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white focus:outline-gray-400"
                  placeholder="18+"
                  required
                />
                <input
                  type="number"
                  name="ageRange"
                  id="ageRange"
                  className="hover:bg-slate-100 cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white focus:outline-gray-400"
                  placeholder="18+"
                  required
                />
              </div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                About Me
              </label>
              <div className="max-w-2xl mx-auto">
                <textarea
                  id="text"
                  className="block p-2.5 h-36 w-full text-sm hover:bg-slate-100 cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500  dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white focus:outline-gray-400"
                  placeholder="Tell the world, what you are looking for, what you do on your weekends or how to wow you in the first message!"
                  required={true}
                ></textarea>
              </div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Gender
              </label>
              <button
                type="button"
                className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Men
              </button>
              <button
                type="button"
                className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Women
              </button>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Let's Date
              </label>
              <button
                type="button"
                className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Men
              </button>
              <button
                type="button"
                className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Women
              </button>
              <button
                type="button"
                className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Everyone
              </button>
              <Link to="/dating/registration/about-me">
                <div className="pt-8 w-full">
                  <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Submit
                    </span>
                  </button>
                </div>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default DatingLogin;
