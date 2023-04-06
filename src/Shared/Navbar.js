import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { FaMoon } from "react-icons/fa";
import { BsMoon } from "react-icons/bs";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const location = useLocation();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const themeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const menuItems = (
    <>
      <li
        className={`font-semibold text-black dark:text-white ${
          location.pathname === "/" ? "text-orange-400" : ""
        }`}
      >
        <Link title="Home" to="/">
          Home
        </Link>
      </li>
      <li
        className={`font-semibold text-black dark:text-white ${
          location.pathname === "/shop" ? "text-orange-400" : ""
        }`}
      >
        <Link title="Shop" to="/shop">
          Shop
        </Link>
      </li>

      <li
        className={`font-semibold text-black dark:text-white ${
          location.pathname === "/about" ? "text-orange-400" : ""
        }`}
      >
        <Link title="About us" to="/about">
          About us
        </Link>
      </li>
    </>
  );

  return (
    <div className="bg-[#FFFFFF] shadow-md static top-0 z-50 dark:bg-[#1A2238]">
      <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <Link
            to="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            <img src={logo} alt="" className="w-32" />
          </Link>
          <ul className="flex items-center hidden space-x-8 lg:flex text-[#FFFFFF]">
            {menuItems}
            <button onClick={themeToggle}>
              {theme === "light" ? (
                <BsMoon className="text-gray-500 w-8 inline-block" />
              ) : (
                <FaMoon className="text-gray-500 w-8 inline-block" />
              )}
            </button>
          </ul>

          <div className="lg:hidden ">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-black" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-10">
                <div className="p-5 border rounded shadow-sm bg-[#FFFFFF]  dark:bg-[#1C2B35]">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <img src={logo} alt="" className="w-32" />
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded  focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-400" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  {/* <label
                    htmlFor="dashboard-drawer"
                    className="btn drawer-button btn-xs ml-20 rounded-md lg:hidden dark:text-white"
                  >
                    Open drawer
                  </label> */}
                  <nav>
                    <ul className="space-y-4 text-[#FFFFFF]">
                      {menuItems}
                      <button onClick={themeToggle}>
                        {theme === "light" ? (
                          <BsMoon className="text-gray-500 w-8 inline-block" />
                        ) : (
                          <FaMoon className="text-gray-500 w-8 inline-block" />
                        )}
                      </button>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
