import "./DatingMainSideBar.css";
import DatingMessages from "./DatingMessages";
import { MdSettings } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { BiHome } from "react-icons/bi";
import { Link } from "react-router-dom";

function DatingMainSideBar() {
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

  const messages = [
    {
      id: "1232344",
      username: "Eddie Hutton",
      userImg:
        "https://media-exp1.licdn.com/dms/image/C4D03AQE2PGxurF3s_A/profile-displayphoto-shrink_800_800/0/1628443314814?e=1659571200&v=beta&t=zkm7slmVohyuUk3uNv0KFefsiZpPK-lT0S8UIgIzWPI",
      message:
        "Want to let a lightskin slide in, I will pay for the 1st round!askljaskljkasklasjklaskljklasjklasjkljaskljaskljaskljklasjklasjklasjklasjlasjljaskljaskljaskl",
    },
    {
      id: "12323441",
      username: "Yass Sharif",
      userImg:
        "https://media-exp1.licdn.com/dms/image/C4D03AQFmfveAN-dwyg/profile-displayphoto-shrink_800_800/0/1644864190655?e=1659571200&v=beta&t=HPs5XvQPSKgrPUmsonJwba85mtskJAUWH3PdE1sgNTA",
      message:
        "This is some dummy text, right here, which is supposed to be a message!",
    },
    {
      id: "1232344",
      username: "Eddie Hutton",
      userImg:
        "https://media-exp1.licdn.com/dms/image/C4D03AQE2PGxurF3s_A/profile-displayphoto-shrink_800_800/0/1628443314814?e=1659571200&v=beta&t=zkm7slmVohyuUk3uNv0KFefsiZpPK-lT0S8UIgIzWPI",
      message:
        "Want to let a lightskin slide in, I will pay for the 1st round!askljaskljkasklasjklaskljklasjklasjkljaskljaskljaskljklasjklasjklasjklasjlasjljaskljaskljaskl",
    },
    {
      id: "12323441",
      username: "Yass Sharif",
      userImg:
        "https://media-exp1.licdn.com/dms/image/C4D03AQFmfveAN-dwyg/profile-displayphoto-shrink_800_800/0/1644864190655?e=1659571200&v=beta&t=HPs5XvQPSKgrPUmsonJwba85mtskJAUWH3PdE1sgNTA",
      message:
        "This is some dummy text, right here, which is supposed to be a message!",
    },
    {
      id: "1232344",
      username: "Eddie Hutton",
      userImg:
        "https://media-exp1.licdn.com/dms/image/C4D03AQE2PGxurF3s_A/profile-displayphoto-shrink_800_800/0/1628443314814?e=1659571200&v=beta&t=zkm7slmVohyuUk3uNv0KFefsiZpPK-lT0S8UIgIzWPI",
      message:
        "Want to let a lightskin slide in, I will pay for the 1st round!askljaskljkasklasjklaskljklasjklasjkljaskljaskljaskljklasjklasjklasjklasjlasjljaskljaskljaskl",
    },
    {
      id: "12323441",
      username: "Yass Sharif",
      userImg:
        "https://media-exp1.licdn.com/dms/image/C4D03AQFmfveAN-dwyg/profile-displayphoto-shrink_800_800/0/1644864190655?e=1659571200&v=beta&t=HPs5XvQPSKgrPUmsonJwba85mtskJAUWH3PdE1sgNTA",
      message:
        "This is some dummy text, right here, which is supposed to be a message!",
    },
  ];

  return (
    <>
      <div className="datingmainsidebar__container border-r-[1px] border-gray-300 h-screen relative">
        <div>
          {posts.map((mapper) => (
            <>
              <div className="flex items-center md:flex md:justify-center sm:flex sm:justify-center xs:flex xs:justify-center gap-x-2 pl-1">
                <Link to="/dating-profile">
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
        <div>
          {messages.slice(0, 5).map((mapper) => (
            <>
              <DatingMessages
                id={mapper.id}
                username={mapper.username}
                userImg={mapper.userImg}
                message={mapper.message}
              />
            </>
          ))}
        </div>
        <div className="2xl:flex 2xl:flex-col 2xl:items-center 2xl:pt-14 xl:flex xl:flex-col xl:items-center xl:pt-14 lg:pt-1 md:pt-8 sm:pt-8 xs:pt-8 xs:flex xs:items-center xs:justify-around">
          <MdSettings className="feedsidebaricons transition ease-in-out delay-110 hover:text-blue-700" />
          <MdOutlineEmail className="feedsidebaricons transition ease-in-out delay-110 hover:text-blue-700" />
          <Link to="/feed">
            <BiHome className="feedsidebaricons transition ease-in-out delay-110  hover:text-blue-700" />
          </Link>
        </div>
        <div className="inset-x-0 bottom-0 flex absolute justify-center pb-3">
          <h3 className="text-sm font-medium text-gray-900 dark:text-white ">
            postiiD
          </h3>
        </div>
      </div>
    </>
  );
}

export default DatingMainSideBar;