import DatingMoreSettings from "./DatingMoreSettings";
import DatingSettingsSideBar from "./DatingSettingsSideBar";

function DatingSettingsContainer() {
  return (
    <>
      <div className="flex">
        <DatingSettingsSideBar />
        <DatingMoreSettings />
      </div>
    </>
  );
}

export default DatingSettingsContainer;
