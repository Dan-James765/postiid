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
        <div className="flex flex-col items-center">
          <Link to="/login">
            <img
              src="https://scontent.flhr10-2.fna.fbcdn.net/v/t1.6435-9/38781010_2579432842082139_3002868557282279424_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=BkNBapH4l_wAX_BzsPu&_nc_ht=scontent.flhr10-2.fna&oh=00_AT_r8ccQrXBvPEX1HplPpWNbBgaMIYgIDSIOcEqWr_BEeg&oe=62AFA354"
              alt=""
              className="my-6 cursor-pointer rounded-full h-8 w-8 object-contain"
            />
          </Link>
          <Link to="/dating/registration">
            <SiTinder className="feedsidebaricons transition ease-in-out delay-110 hover:text-blue-700" />
          </Link>
          <BiHome className="feedsidebaricons transition ease-in-out delay-110  hover:text-blue-700" />
          <MdPeopleOutline className="feedsidebaricons transition ease-in-out delay-110 hover:text-blue-700 " />
          <MdOutlineEmail className="feedsidebaricons transition ease-in-out delay-110 hover:text-blue-700" />
          <MdSettings className="feedsidebaricons transition ease-in-out delay-110 hover:text-blue-700" />
          <button
            type="submit"
            className="2xl:w-48 xl:w-48 lg:w-36 md:w-28 sm:w-20 xs:w-20 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium  w-full rounded-lg text-sm px-5 py-2.5 mt-6 text-center"
          >
            Post
          </button>
        </div>
      </div>
    </>
  );
}

export default FeedSideBar;
