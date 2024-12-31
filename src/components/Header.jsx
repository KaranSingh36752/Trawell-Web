import React from "react";
import { Earth } from 'lucide-react';
const Header = () => {
  return (
    <>
      <div className="navbar sticky mt-4 px-5 text-black  top-0 z-50">
        <div className="flex-1">
          <a className="btn btn-ghost text-4xl font-bold"><Earth className="size-7 mt-1"/>Trawell</a>
          <ul className="flex gap-3 ml-2 text-xl font-semibold  cursor-pointer ">
            <li ><a>Products</a></li>
            <li><a>About Us</a></li>
            <li><a>Blog</a></li>
            <li><a>Trips</a></li>
            <li><a>Download</a></li>
          </ul>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
