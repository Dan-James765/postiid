import "./FeedSettingsMain.css";
import { FaUserEdit } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineDelete } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { BiHome } from "react-icons/bi";
import { Link } from "react-router-dom";

function FeedSettingsMain() {
  return (
    <>
      <div className="feedsidebar__container border-r-[1px] border-gray-300 h-screen">
        <div className="flex flex-col items-center xl:gap-y-20 lg:gap-y-6 sm:gap-y-4 xs:gap-y-6  xl:items-center xl:pt-14 lg:pt-4 md:pt-8 sm:pt-10 sm:justify-around xs:pt-10 ">
          <div className="flex flex-col xl:gap-y-6 xl:text-lg lg:text-xs lg:gap-y-6 items-center">
            <Link to="/feed/settings/edit-profile">
              <button className="hidden lg:block hover:bg-gray-100 hover:text-black text-gray-500 font-semibold py-2 px-4 rounded-full">
                Edit Profile{" "}
              </button>
            </Link>
            <Link to="/feed/settings/change-password">
              <button className=" hidden lg:block hover:bg-gray-100  hover:text-black   text-gray-500 font-semibold py-2 px-6 rounded-full">
                Change Password
              </button>
            </Link>
            <Link to="/feed/settings/delete-account">
              <button className=" hidden lg:block hover:bg-gray-100 hover:text-black   text-gray-500 font-semibold py-2 px-6 rounded-full">
                Delete Account
              </button>
            </Link>
            <Link to="/feed/settings/log-out">
              <button className=" hidden lg:block hover:bg-gray-100  hover:text-black  text-gray-500 font-semibold py-2 px-6 rounded-full">
                Log Out
              </button>
            </Link>
          </div>
          <div className="flex flex-col justify-center gap-y-10 text-2xl text-gray-500">
            <button>
              <Link to="/feed">
                <BiHome className="lg:hidden sm:flex cursor-pointer" />
              </Link>
            </button>
            <button>
              <Link to="/feed/settings/edit-profile">
                <FaUserEdit className="lg:hidden sm:flex cursor-pointer" />
              </Link>
            </button>
            <button>
              <Link to="/feed/settings/change-password">
                <RiLockPasswordLine className="lg:hidden sm:flex cursor-pointer" />
              </Link>
            </button>
            <button>
              <Link to="/feed/settings/delete-account">
                <AiOutlineDelete className="lg:hidden sm:flex cursor-pointer" />
              </Link>
            </button>
            <button>
              <Link to="/feed/settings/log-out">
                <FiLogOut className="lg:hidden sm:flex cursor-pointer" />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeedSettingsMain;
