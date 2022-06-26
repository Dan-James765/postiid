import FeedSettingsMain from "./FeedSettingsMain";
import FeedSideBar from "../FeedSideBar";
import FeedSettingChangePassword from "./FeedSettingChangePassword";

function FeedChangePasswordSettingsContainer() {
  return (
    <>
      <div className="flex">
        <FeedSideBar />
        <FeedSettingsMain />
        <FeedSettingChangePassword />
      </div>
    </>
  );
}

export default FeedChangePasswordSettingsContainer;
