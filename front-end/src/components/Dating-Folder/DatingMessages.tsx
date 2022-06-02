function DatingMessages({
  id,
  username,
  userImg,
  message,
}: {
  id: string;
  username: string;
  userImg: string;
  message: string;
}) {
  return (
    <>
      <div className="bg-gray-50 border-slate-100 border-[1px] h-auto hover:bg-gray-100 cursor-pointer">
        <div className="flex items-center gap-x-1 py-1 2xl:justify-start xl:justify-start lg:justify-start xs:justify-center">
          <img
            src={userImg}
            alt=""
            className="cursor-pointer rounded-full h-8 w-8 object-contain border border-gray-300 "
          />
          <h1 className="hidden cursor-pointer md:block text-xs 2xl:font-normal xl:font-normal lg:font-medium lg:text-xs">
            {username}
          </h1>
        </div>
        <h1 className="flex-col hidden md:block lg:text-xs text-xs text-gray-400 font-normal truncate">
          {message}
        </h1>
      </div>
    </>
  );
}

export default DatingMessages;
