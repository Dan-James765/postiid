import FeedMain from "./FeedMain";
import FeedSideBar from "./FeedSideBar";
import "./FeedContainer.css";
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
