import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <>
      <div className="card">
        <div className="flex justify-center items-center font-semibold">
          <p>Sorry, this page doesn't exist.</p>
        </div>
        <div className="flex justify-center items-center pt-6">
          <Link to="/login">
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              Return Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ErrorPage;
