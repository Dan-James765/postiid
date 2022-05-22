import { BiHome } from "react-icons/bi";
import { MdPeopleOutline } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";

function FeedSideBar() {
  return (
    <>
      <div className="flex flex-col items-center ">
        <div className="">
          <BiHome className="feedsidebaricons transition ease-in-out delay-110 hover:text-blue-700 " />
          <MdPeopleOutline className="feedsidebaricons transition ease-in-out delay-110 hover:text-blue-700 " />
          <MdOutlineEmail className="feedsidebaricons transition ease-in-out delay-110 hover:text-blue-700" />
          <BsInstagram className=" feedsidebaricons transition ease-in-out delay-110 hover:text-blue-700" />
        </div>
        <button
          type="submit"
          className="2xl:w-48 xl:w-48 lg:w-48 md:w-28 sm:w-28 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Post
        </button>
      </div>
    </>
  );
}

export default FeedSideBar;
