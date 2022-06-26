import FeedSettingsMain from "./FeedSettingsMain";
import FeedSideBar from "../FeedSideBar";
import FeedSettingsLogOut from "./FeedSettingsLogOut";

function FeedLogOutSettingsContainer() {
  return (
    <>
      <div className="flex">
        <FeedSideBar />
        <FeedSettingsMain />
        <FeedSettingsLogOut />
      </div>
    </>
  );
}

export default FeedLogOutSettingsContainer;
