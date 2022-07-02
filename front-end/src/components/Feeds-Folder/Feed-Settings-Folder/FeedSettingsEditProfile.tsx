import { RiDivideLine } from "react-icons/ri";
import "./FeedSettingsEditProfile.css";

function FeedSettingsEditProfile() {
  const postsArray = [
    {
      id: "123",
      username: "danieljames",
      userImg:
        "https://scontent.flhr10-2.fna.fbcdn.net/v/t1.6435-9/38781010_2579432842082139_3002868557282279424_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=7Gxm0yoiLjkAX_7wlNf&_nc_ht=scontent.flhr10-2.fna&oh=00_AT-UB_J8BdF_Mzo9MyqmJis7SyjZGr7u7IY13Op9MccHSw&oe=62DB24D4",
      img: "http://prod-upp-image-read.ft.com/125f09a2-9800-11e9-9573-ee5cbb98ed36",
      name: "Daniel James",
      bio: "Cool cook out here moving mad! ",
      email: "danjameshh@hotmai.com",
    },
  ];

  return (
    <>
      <div className="feedsettings__editprofile">
        <div className="flex flex-col items-center xl:gap-y-20 lg:gap-y-6 sm:gap-y-4 xs:gap-y-6  xl:items-center xl:pt-14 lg:pt-4 md:pt-8 sm:pt-10 sm:justify-around xs:pt-10 ">
          {postsArray.map((mapper) => (
            <>
              <div className="flex flex-col items-center xl:gap-y-20 gap-y-10">
                <div className="flex">
                  <img
                    src={mapper.userImg}
                    alt=""
                    className="cursor-pointer rounded-full h-8 w-8 object-contain xl:h-12 xl:w-12 mr-8"
                  />
                  <h1 className="xl:font-semibold xl:text-xl ">
                    {mapper.username}{" "}
                    <span className="flex flex-col xl:text-sm xs:text-xs text-blue-700 cursor-pointer">
                      Update Your Username
                    </span>
                  </h1>
                </div>
                <div className="flex ">
                  <h1 className="">Bio</h1>
                  <textarea
                    id="text"
                    className=" block p-2.5 h-36 w-full text-sm hover:bg-slate-100 cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500  dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white focus:outline-gray-400"
                    placeholder={mapper.bio}
                  ></textarea>
                </div>
                <div className="flex ">
                  <h1 className="">Email</h1>
                  <input
                    id="text"
                    className=" block p-2.5 h-36 w-full text-sm hover:bg-slate-100 cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500  dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white focus:outline-gray-400"
                    placeholder={mapper.bio}
                  ></input>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default FeedSettingsEditProfile;
