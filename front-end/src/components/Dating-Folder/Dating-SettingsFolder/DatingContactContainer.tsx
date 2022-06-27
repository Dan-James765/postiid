import DatingContact from "./DatingContact";
import DatingSettingsSideBar from "./DatingSettingsSideBar";

function DatingContactContainer() {
  return (
    <>
      <div className="flex">
        <DatingSettingsSideBar />
        <DatingContact />
      </div>
    </>
  );
}

export default DatingContactContainer;
