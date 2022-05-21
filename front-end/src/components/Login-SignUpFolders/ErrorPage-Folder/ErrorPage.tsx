import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <>
      <div className="flex justify-center items-center font-semibold 2xl:pt-52 xl:pt-52 lg:pt-40">
        <p>Ran straight into a wall, let's get you back on track!</p>
      </div>
      <div className="flex justify-center items-center pt-6">
        <Link to="/feed">
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Back to postiiD
          </button>
        </Link>
      </div>
    </>
  );
}

export default ErrorPage;
