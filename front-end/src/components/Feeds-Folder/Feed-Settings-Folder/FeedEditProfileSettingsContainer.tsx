import FeedSettingsMain from "./FeedSettingsMain";
import FeedSideBar from "../FeedSideBar";
import FeedSettingsEditProfile from "./FeedSettingsEditProfile";

function FeedEditProfileSettingsContainer() {
  return (
    <>
      <div className="flex">
        <FeedSideBar />
        <FeedSettingsMain />
        <FeedSettingsEditProfile />
      </div>
    </>
  );
}

export default FeedEditProfileSettingsContainer;
