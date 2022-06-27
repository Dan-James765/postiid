import FeedSettingsMain from "./FeedSettingsMain";
import FeedSettingsLogOut from "./FeedSettingsLogOut";
import FeedSettingsSideBar from "./FeedSettingsSideBar";

function FeedLogOutSettingsContainer() {
  return (
    <>
      <div className="flex">
        <FeedSettingsSideBar />
        <FeedSettingsMain />
        <FeedSettingsLogOut />
      </div>
    </>
  );
}

export default FeedLogOutSettingsContainer;
