import FeedMain from "./FeedMain";
import "./FeedContainer.css";
import FeedSideBar from "../Feed-Sidebar/FeedSideBar";
function FeedContainer() {
  return (
    <>
      <section className="feed__container flex">
        <FeedSideBar />
        <FeedMain />
      </section>
    </>
  );
}

export default FeedContainer;
