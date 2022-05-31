import "./DatingMainSideBar.css";
import { Link } from "react-router-dom";

function DatingMainSideBar() {
  const posts = [
    {
      id: "123",
      username: "Daniel James",
      userImg:
        "https://scontent.flhr10-2.fna.fbcdn.net/v/t1.6435-9/38781010_2579432842082139_3002868557282279424_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=BkNBapH4l_wAX_BzsPu&_nc_ht=scontent.flhr10-2.fna&oh=00_AT_r8ccQrXBvPEX1HplPpWNbBgaMIYgIDSIOcEqWr_BEeg&oe=62AFA354",
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
              <div className="flex items-center md:flex md:justify-center sm:flex sm:justify-center xs:flex xs:justify-center gap-x-2 pl-1">
                <Link to="/feed">
                  <img
                    src={mapper.userImg}
                    alt=""
                    className="my-6 cursor-pointer rounded-full h-8 w-8 object-contain "
                  />
                </Link>
                <h1 className="hidden md:block font-semibold">
                  {mapper.username}
                </h1>
              </div>
            </>
          ))}
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
