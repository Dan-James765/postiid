import { Fade } from "react-awesome-reveal";

function Header() {
  return (
    <div>
      <Fade>
        <header className="shadow-lg py-6 flex items-center justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
            className="h-8 w-8 max-h-8 max-w-8"
            alt=""
          />
        </header>
      </Fade>
    </div>
  );
}

export default Header;
