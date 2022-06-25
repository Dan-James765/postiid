import { FaTimes } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import "./DatingMainButtons.css";
function DatingMainButtons() {
  return (
    <>
      <div className="fixed w-full flex justify-center swipeButtonsXL swipeButtonsLG swipeButtonsMD swipeButtonsSM swipeButtonsXS ">
        <FaTimes className="xl:w-10 xl:h-10 lg:w-7 lg:h-7 md:w-7 md:h-7 sm:w-6 sm:h-6  xs:w-6 xs:h-6  border border-gray-200  rounded-full bg-white text-gray-300 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110 hover:text-red-700" />
        <FaCheck className="xl:w-10 xl:h-10 lg:w-7 lg:h-7 md:w-7 md:h-7 sm:w-6 sm:h-6  xs:w-6 xs:h-6  border border-gray-200  rounded-full bg-white text-gray-600 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110 hover:text-green-700" />
      </div>
    </>
  );
}

export default DatingMainButtons;
