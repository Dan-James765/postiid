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
                <div className="flex mr-12">
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
                <div className="flex gap-x-10">
                  <h1 className="">Bio</h1>
                  <textarea
                    id="text"
                    className=" block p-2.5 h-36 w-full text-sm hover:bg-slate-100 cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500  dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white focus:outline-gray-400"
                    placeholder={mapper.bio}
                  ></textarea>
                </div>
                <div className="flex items-center ">
                  <h1 className="">Email</h1>
                  <input
                    type="text"
                    name="fullName"
                    id="email"
                    className="hover:bg-slate-100 cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white focus:outline-gray-400"
                    placeholder={mapper.email}
                  />
                </div>
                <div className="flex items-center ">
                  <h1 className="">Password</h1>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="hover:bg-slate-100 cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white focus:outline-gray-400"
                  />
                </div>
                <div className="pt-8 w-full">
                  <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Submit
                    </span>
                  </button>
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
