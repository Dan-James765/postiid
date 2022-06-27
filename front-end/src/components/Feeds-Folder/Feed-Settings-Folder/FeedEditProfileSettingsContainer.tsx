import FeedSettingsMain from "./FeedSettingsMain";
import FeedSettingsEditProfile from "./FeedSettingsEditProfile";
import FeedSettingsSideBar from "./FeedSettingsSideBar";

function FeedEditProfileSettingsContainer() {
  return (
    <>
      <div className="flex">
        <FeedSettingsSideBar />
        <FeedSettingsMain />
        <FeedSettingsEditProfile />
      </div>
    </>
  );
}

export default FeedEditProfileSettingsContainer;
