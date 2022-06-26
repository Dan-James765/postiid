import { BiHome } from "react-icons/bi";
import { MdPeopleOutline } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { MdSettings } from "react-icons/md";
import { SiTinder } from "react-icons/si";
import { Link } from "react-router-dom";
import "./FeedSideBar.css";

function FeedSideBar() {
  return (
    <>
      <div className="feedsidebar__container border-r-[1px] border-gray-300 h-screen">
        <div className="flex flex-col items-center xl:gap-y-20 lg:gap-y-6 sm:gap-y-4 xs:gap-y-6  xl:items-center xl:pt-14 lg:pt-4 md:pt-8 sm:pt-10 sm:justify-around xs:pt-10 ">
          <Link to="/login">
            <img
              src="https://scontent.flhr10-2.fna.fbcdn.net/v/t1.6435-9/38781010_2579432842082139_3002868557282279424_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=7Gxm0yoiLjkAX_7wlNf&_nc_ht=scontent.flhr10-2.fna&oh=00_AT-UB_J8BdF_Mzo9MyqmJis7SyjZGr7u7IY13Op9MccHSw&oe=62DB24D4"
              alt=""
              className="cursor-pointer rounded-full h-8 w-8 object-contain xl:h-12 xl:w-12"
            />
          </Link>
          <Link to="/dating/registration">
            <button className="xl:px-28 xl:py-1 md:p-2 sm:p-2 sm:hover:text-black sm:hover:bg-gray-200 transition ease-in-out delay-110 rounded-full cursor-pointer text-gray-500">
              <SiTinder className="feedsidebaricons" />
            </button>
          </Link>
          <Link to="/feed">
            <button className="xl:px-28 xl:py-1 sm:p-2  sm:hover:text-black sm:hover:bg-gray-200 transition ease-in-out delay-110 rounded-full cursor-pointer text-gray-500">
              <BiHome className="feedsidebaricons" />
            </button>
          </Link>
          <button className="xl:px-28 xl:py-1 md:p-2 sm:p-2 sm:hover:text-black sm:hover:bg-gray-200 transition ease-in-out delay-110 rounded-full cursor-pointer text-gray-500">
            <MdPeopleOutline className="feedsidebaricons  " />
          </button>
          <button className="xl:px-28 xl:py-1 md:p-2 sm:p-2 sm:hover:text-black sm:hover:bg-gray-200 transition ease-in-out delay-110 rounded-full cursor-pointer text-gray-500">
            <MdOutlineEmail className="feedsidebaricons " />
          </button>
          <Link to="/feed/settings">
            <button className="xl:px-28 xl:py-1 md:p-2 sm:p-2 sm:hover:text-black sm:hover:bg-gray-200 transition ease-in-out delay-110 rounded-full cursor-pointer text-gray-500">
              <MdSettings className="feedsidebaricons " />
            </button>
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <button
            type="submit"
            className="xl:w-48 lg:w-36 md:w-28 sm:w-20 xs:w-20 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium  w-full rounded-lg text-sm px-5 py-2.5 mt-6 text-center"
          >
            Post
          </button>
        </div>
      </div>
    </>
  );
}

export default FeedSideBar;
