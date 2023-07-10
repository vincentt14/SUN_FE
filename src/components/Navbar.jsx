import react, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(false);

  const onHamburgerClick = () => {
    setActive(!active);
  };

  return (
    <header className="fixed top-0 left-0 z-10 flex w-full items-center border-b-2 shadow-sm">
      <div className="container">
        <div className="flex items-center justify-between py-6">
          <div className="px-4">
            <Link to="/">
              <img src="./asset/logo.jpg" alt="logo" />
            </Link>
          </div>
          <div className="flex items-center px-4">
            <button type="button" onClick={onHamburgerClick} className={active ? "block absolute right-4 hamburger-active lg:hidden" : "block absolute right-4 lg:hidden"}>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>

            <nav className="hidden lg:block lg:max-w-full">
              <ul className="block lg:flex">
                <li className="group">
                  <Link to="/" className="font-bold text-primary py-2 mx-8 group-hover:text-secondary">
                    Service
                  </Link>
                </li>
                <li className="group">
                  <Link to="/" className="font-bold text-primary py-2 mx-8 group-hover:text-secondary">
                    About
                  </Link>
                </li>
                <li className="group">
                  <Link to="/" className="font-bold text-primary py-2 mx-8 group-hover:text-secondary">
                    Portfolio
                  </Link>
                </li>
                <li className="group">
                  <Link to="/" className="font-bold text-primary py-2 mx-8 group-hover:text-secondary">
                    Blog
                  </Link>
                </li>
                <li className="group">
                  <Link to="/" className="font-bold text-primary py-2 mx-8 group-hover:text-secondary">
                    Carrer
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
