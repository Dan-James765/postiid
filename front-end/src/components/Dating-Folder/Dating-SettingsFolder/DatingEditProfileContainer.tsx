import DatingEditYourProfile from "./DatingEditYourProfile";
import DatingSettingsSideBar from "./DatingSettingsSideBar";

function DatingEditProfileContainer() {
  return (
    <>
      <div className="flex">
        <DatingSettingsSideBar />
        <DatingEditYourProfile />
      </div>
    </>
  );
}

export default DatingEditProfileContainer;
