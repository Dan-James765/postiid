import FeedSettingsMain from "./FeedSettingsMain";
import FeedSettingChangePassword from "./FeedSettingChangePassword";
import FeedSettingsSideBar from "./FeedSettingsSideBar";

function FeedChangePasswordSettingsContainer() {
  return (
    <>
      <div className="flex">
        <FeedSettingsSideBar />
        <FeedSettingsMain />
        <FeedSettingChangePassword />
      </div>
    </>
  );
}

export default FeedChangePasswordSettingsContainer;
