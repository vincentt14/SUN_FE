import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";
import UserContext from "../context/UserContext";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(false);
  const { user } = useContext(UserContext);

  const onHamburgerClick = () => {
    setActive(!active);
    setToggle(!toggle);
  };

  const links = [
    {
      to: "/",
      label: "Service",
    },
    {
      to: "/",
      label: "About",
    },
    {
      to: "/",
      label: "Portfolio",
    },
    {
      to: "/",
      label: "Blog",
    },
    {
      to: "/",
      label: "Carrer",
    },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 z-10 flex w-full items-center border-b-2 shadow-sm bg-white">
        <div className="container">
          <div className="flex items-center justify-between py-6">
            <div
              className="px-4"
              onClick={() => {
                setToggle(false);
                setActive(false);
              }}
            >
              <Link to="/">
                <img src="./asset/logo.jpg" alt="logo" />
              </Link>
            </div>
            <div className="flex items-center px-4">
              <button type="button" onClick={onHamburgerClick} className={active ? "block absolute right-4 hamburger-active px-4 lg:hidden" : "block absolute right-4 px-4 lg:hidden"}>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
              </button>

              <nav className="hidden lg:block lg:max-w-full">
                <ul className="block lg:flex">
                  {links.map((link) => (
                    <li className="group" key={link.label}>
                      <Link to={link.to} className="font-bold py-2 mx-4 group-hover:text-secondary">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                  <CustomButton link={"/"} title={"Contact Us"} style={"bg-secondary"} />
                  {user ? <CustomButton link={"/dashboard"} title={"Dashboard"} style={"border-2 border-black"} /> : <CustomButton link={"/login"} title={"Login"} style={"border-2 border-black"} />}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {toggle && (
        <div className="fixed z-10 flex items-start justify-center bg-[#fbeeac] mt-[41px] w-screen h-screen lg:hidden ">
          <ul className="mt-5 flex flex-col items-center">
            {links.map((link) => (
              <li className="group my-3" onClick={onHamburgerClick} key={link.label}>
                <Link to={link.to} className="font-bold text-xl p-2 group-hover:text-secondary">
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="my-5" onClick={onHamburgerClick}>
              <CustomButton link={"/"} title={"Contact Us"} style={"bg-secondary"} />
            </li>
            {user ? (
              <li className="my-5" onClick={onHamburgerClick}>
                <CustomButton link={"/dashboard"} title={"Dashboard"} style={"border-2 border-black"} />
              </li>
            ) : (
              <li className="my-5" onClick={onHamburgerClick}>
                <CustomButton link={"/login"} title={"Login"} style={"border-2 border-black"} />
              </li>
            )}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
