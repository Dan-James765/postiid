import FeedSettingsMain from "./FeedSettingsMain";
import FeedSettingsDeleteAccount from "./FeedSettingsDeleteAccount";
import FeedSettingsSideBar from "./FeedSettingsSideBar";

function FeedDeleteAccountSettingsContainer() {
  return (
    <>
      <div className="flex">
        <FeedSettingsSideBar />
        <FeedSettingsMain />
        <FeedSettingsDeleteAccount />
      </div>
    </>
  );
}

export default FeedDeleteAccountSettingsContainer;
