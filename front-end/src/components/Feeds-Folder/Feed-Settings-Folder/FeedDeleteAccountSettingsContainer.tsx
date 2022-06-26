import FeedSettingsMain from "./FeedSettingsMain";
import FeedSideBar from "../FeedSideBar";
import FeedSettingsDeleteAccount from "./FeedSettingsDeleteAccount";

function FeedDeleteAccountSettingsContainer() {
  return (
    <>
      <div className="flex">
        <FeedSideBar />
        <FeedSettingsMain />
        <FeedSettingsDeleteAccount />
      </div>
    </>
  );
}

export default FeedDeleteAccountSettingsContainer;
