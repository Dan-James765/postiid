function FeedPost({
  key,
  id,
  username,
  userImg,
  img,
  caption,
}: {
  id: string;
  key: string;
  username: string;
  userImg: string;
  img: string;
  caption: string;
}) {
  return (
    <>
      <div className="flex flex-col items-center ">
        <div className="">
          <img src={img} className="object-cover feedimageresponsive " alt="" />
          <div className="flex items-center justify-center gap-x-2 bg-slate-50 xl:w-96  lg:w-80 md:w-56 sm:w-56 xs:w-52 py-1 border-b-[1px] border-gray-300">
            <img
              src={userImg}
              alt=""
              className=" cursor-pointer rounded-full h-6 w-6 object-contain"
            />
            <p className="text-xs font-light">{username}</p>
          </div>
          <div className="bg-slate-50 pt-1 pl-2">
            <p className="truncate text-xs font-normal">
              <span className="pr-2 truncate font-medium">{username}</span>
              {caption}
            </p>

            <form className="flex items-center p-4 bg-transparent">
              <input
                type="text"
                placeholder="Add a comment..."
                className="border-none flex-1 focus:ring-0 outline-none bg-transparent text-xs placeholder:text-xs"
              />
              <button className="text-xs font-thin">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeedPost;
