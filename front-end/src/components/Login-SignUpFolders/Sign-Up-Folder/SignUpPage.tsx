function SignUpPage() {
  return (
    <>
      <div className="flex justify-center 2xl:pt-10 xl:pt-10 lg:pt-6 xs:pt-10 ">
        <div className="2xl:w-96 xl:w-96 lg:w-96 sm:p-6  ">
          <form className="space-y-6" action="#">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white flex justify-center">
              Sign Up for postiiD
            </h3>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Your username
              </label>
              <input
                type="text"
                name="text"
                id="text"
                className="hover:bg-slate-100 cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white focus:outline-gray-400"
                placeholder="joebloggs123"
                required={true}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="hover:bg-slate-100 cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white focus:outline-gray-400"
                placeholder="name@example.com"
                required={true}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Your password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="????????????????????????"
                className=" hover:bg-slate-100 cursor-pointer bg-gray-50 border border-gray-30 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white focus:outline-gray-400"
                required={true}
              />
            </div>
            <div className="flex items-start">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    required={true}
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label className="font-medium text-gray-900 dark:text-gray-300">
                    Remember me
                  </label>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full"
            >
              Create your account
            </button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Already registered?{" "}
              <a
                href="/login"
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                Login here
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUpPage;
