import { Link } from "react-router-dom";
import { FaUserEdit } from "react-icons/fa";
import { MdUpgrade } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import { FaQuestion } from "react-icons/fa";
import "./DatingEditProfile.css";

function DatingEditProfile() {
  const posts = [
    {
      id: "123",
      username: "Daniel James",
      userImg:
        "https://scontent.flhr10-2.fna.fbcdn.net/v/t1.6435-9/38781010_2579432842082139_3002868557282279424_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=7Gxm0yoiLjkAX_7wlNf&_nc_ht=scontent.flhr10-2.fna&oh=00_AT-UB_J8BdF_Mzo9MyqmJis7SyjZGr7u7IY13Op9MccHSw&oe=62DB24D4",
      img: "http://prod-upp-image-read.ft.com/125f09a2-9800-11e9-9573-ee5cbb98ed36",
      caption: "This is AWWESOME",
    },
  ];
  return (
    <>
      <div className="datingmainsidebar__container border-r-[1px] border-gray-300 h-screen relative">
        <div>
          {posts.map((mapper) => (
            <>
              <div className="flex items-center md:flex md:justify-center sm:flex sm:justify-center xs:flex xs:justify-center gap-x-2 pb-2">
                <Link to="/dating/main">
                  <img
                    src={mapper.userImg}
                    alt=""
                    className="my-6 cursor-pointer rounded-full h-8 w-8 object-contain"
                  />
                </Link>
                <h1 className="hidden lg:block font-semibold">
                  {mapper.username}
                </h1>
              </div>
            </>
          ))}
        </div>
        <div className="flex flex-col xl:gap-y-6 xl:text-lg lg:text-xs lg:gap-y-6 items-center">
          <button className="hidden lg:block hover:bg-gray-100 hover:text-black text-gray-500 font-semibold py-2 px-4 rounded-full">
            Upgrade to postiiD Premium{" "}
          </button>
          <button className=" hidden lg:block hover:bg-gray-100  hover:text-black   text-gray-500 font-semibold py-2 px-6 rounded-full">
            Edit Profile
          </button>
          <button className=" hidden lg:block hover:bg-gray-100 hover:text-black   text-gray-500 font-semibold py-2 px-6 rounded-full">
            Settings
          </button>
          <button className=" hidden lg:block hover:bg-gray-100  hover:text-black  text-gray-500 font-semibold py-2 px-6 rounded-full">
            Contact & FAQs
          </button>
          <button className=" hidden lg:block hover:bg-gray-100  hover:text-black  text-gray-500 font-semibold py-2 px-6 rounded-full">
            Log Out
          </button>
        </div>
        <div className="flex flex-col items-center gap-y-9 text-2xl text-gray-500">
          <button className="selectedButton">
            <MdUpgrade className="lg:hidden sm:flex cursor-pointer " />
          </button>
          <FaUserEdit className="lg:hidden sm:flex cursor-pointer" />
          <FiSettings className="lg:hidden sm:flex cursor-pointer" />
          <FaQuestion className="lg:hidden sm:flex cursor-pointer" />
          <FiLogOut className="lg:hidden sm:flex cursor-pointer" />
        </div>
      </div>
    </>
  );
}

export default DatingEditProfile;
