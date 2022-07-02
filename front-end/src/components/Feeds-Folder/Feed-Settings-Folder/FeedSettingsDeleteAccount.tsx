import "./FeedSettingsDeleteAccount.css";

function FeedSettingsDeleteAccount() {
  return (
    <div className="feedsettings__deleteaccount ">
      <div className=" flex flex-col items-center justify-center xl:gap-y-20 xl:pt-14 lg:pt-4lg:gap-y-6 sm:gap-y-4 xs:gap-y-6   md:pt-8 sm:pt-10 xs:pt-10 ">
        <h1 className=" mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          This action cannot be reversed.
        </h1>
        <button
          type="button"
          className="flex justify-center py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Delete Account
        </button>
      </div>
    </div>
  );
}

export default FeedSettingsDeleteAccount;
