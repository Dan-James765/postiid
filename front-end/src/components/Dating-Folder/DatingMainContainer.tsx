import DatingMainSideBar from "./DatingMainSideBar";
import DatingMainBody from "./DatingMainBody";

function DatingMainContainer() {
  return (
    <>
      <section className="flex">
        <DatingMainSideBar />
        <DatingMainBody />
      </section>
    </>
  );
}

export default DatingMainContainer;
