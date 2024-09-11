import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  // State to track the active link
  const [activeLink, setActiveLink] = useState<string>("Home");

  // Function to handle click and set active link
  const handleClick = (link: string) => {
    setActiveLink(link);
  };
  // Initialize theme with explicit string type
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") ?? "light"
  );

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTheme = e.target.checked ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);

    // Safely access document and set attribute
    const htmlElement = document.querySelector("html");
    if (htmlElement) {
      htmlElement.setAttribute("data-theme", theme);
    }
  }, [theme]);

  return (
    <div className="navbar bg-base-100 font-mont top-0 fixed z-50">
      <div className="navbar-start">
        <a className="btn btn-ghost text-2xl font-bold mr-96">
          <button>
            <img src="/images/logoipsum-248.svg" alt="logo" />
          </button>
          FitQuest
        </a>
      </div>

      {/* Desktop design */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link
              to="/"
              className={`${
                activeLink === "Home" ? "text-orange-500 underline" : ""
              }`}
              onClick={() => handleClick("Home")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/membership"
              className={`${
                activeLink === "Membership" ? "text-orange-500 underline" : ""
              }`}
              onClick={() => handleClick("Membership")}
            >
              Membership
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`${
                activeLink === "About" ? "text-orange-500 underline" : ""
              }`}
              onClick={() => handleClick("About")}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/blogs"
              className={`${
                activeLink === "Blogs" ? "text-orange-500 underline" : ""
              }`}
              onClick={() => handleClick("Blogs")}
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className="px-10 rounded-full py-2 bg-black text-white hover:bg-orange-600"
              onClick={() => handleClick("Sign Up")}
            >
              Sign Up
            </Link>
          </li>
          <li>
            <label className="swap swap-rotate">
              <input
                type="checkbox"
                checked={theme === "dark"}
                onChange={handleToggle}
              />
              <svg
                className="swap-on h-7 w-7 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>
              <svg
                className="swap-off h-7 w-7 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </li>
        </ul>
      </div>

      {/* Mobile-only drawer */}
      <div className="drawer drawer-end lg:hidden top-0 z-50">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex justify-end">
          <label
            htmlFor="my-drawer-4"
            className="drawer-button text-orange-600 border-orange-500 border-2"
          >
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-10 pt-80">
            <li>
              <Link
                to="/"
                className={`${
                  activeLink === "Home" ? "text-orange-500 underline" : ""
                }`}
                onClick={() => handleClick("Home")}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/membership"
                className={`${
                  activeLink === "Membership" ? "text-orange-500 underline" : ""
                }`}
                onClick={() => handleClick("Membership")}
              >
                Membership
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`${
                  activeLink === "About" ? "text-orange-500 underline" : ""
                }`}
                onClick={() => handleClick("About")}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/blogs"
                className={`${
                  activeLink === "Blogs" ? "text-orange-500 underline" : ""
                }`}
                onClick={() => handleClick("Blogs")}
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="px-10 rounded-full py-2 bg-black mr-32 whitespace-nowrap text-white hover:bg-orange-600"
                onClick={() => handleClick("Sign Up")}
              >
                Sign Up
              </Link>
            </li>
            <li>
              <label className="swap swap-rotate">
                <input
                  type="checkbox"
                  checked={theme === "dark"}
                  onChange={handleToggle}
                />
                <svg
                  className="swap-on h-7 w-7 fill-current mr-40"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>
                <svg
                  className="swap-off h-7 w-7 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
