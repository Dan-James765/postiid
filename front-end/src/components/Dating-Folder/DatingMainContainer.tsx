import DatingMainSideBar from "./DatingMainSideBar";
import DatingMainSwipe from "./DatingMainSwipe";

function DatingMainContainer() {
  return (
    <>
      <section className="flex">
        <DatingMainSideBar />
        <DatingMainSwipe />
      </section>
    </>
  );
}

export default DatingMainContainer;
