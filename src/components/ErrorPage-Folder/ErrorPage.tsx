import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <>
      <header className="shadow-lg py-6 flex justify-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
          className="h-8 w-8 max-h-8 max-w-8"
          alt=""
        />
      </header>

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
