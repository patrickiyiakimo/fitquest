import React from "react";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 font-mont">
      <div className="navbar-start">
        <a className="btn btn-ghost text-2xl font-bold mr-96 ">
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
            <a>Home</a>
          </li>
          <li>
            <a>Membership</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Blogs</a>
          </li>
          <li>
            <a className=" px-10 rounded-full py-2 bg-black text-white hover:bg-gray-900">Contact</a>
          </li>
        </ul>
      </div>

      {/* Mobile-only drawer */}
      <div className="drawer drawer-end lg:hidden">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex justify-end">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-4"
            className="drawer-button text-orange-600"
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
            {/* Sidebar content here */}
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Membership</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Blogs</a>
            </li>
            <li>
              <div className="navbar-end">
                <a className="px-10 rounded-full py-2 bg-black text-white hover:bg-gray-900">Button</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
