import React from "react";

function DatingLogin() {
  return (
    <>
      <div>
        <div className="flex justify-center 2xl:pt-10 xl:pt-10 lg:pt-6 xs:pt-10">
          <div className=" 2xl:w-96 xl:w-96 lg:w-96 sm:p-6  ">
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
                required
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
                required
              />
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

              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Show Me
              </label>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default DatingLogin;
