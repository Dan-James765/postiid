import FeedMain from "./FeedMain";
import FeedSideBar from "./FeedSideBar";
function FeedContainer() {
  return (
    <>
      <section className="flex">
        <FeedSideBar />
        <FeedMain />
      </section>
    </>
  );
}

export default FeedContainer;
