import React from "react";
import { Earth } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const user = useSelector((store) => store.user);

  return (
    <>
      <div className="navbar sticky mt-4 px-5 text-black  top-0 z-50">
        <div className="flex-1">
          <Link to={"/"} className="btn btn-ghost text-4xl font-bold">
            <Earth className="size-7 mt-1" />
            Trawell
          </Link>
          {!user && (
            <ul className="flex gap-3 ml-2 text-xl font-semibold  cursor-pointer ">
              <li>
                <a>Products</a>
              </li>
              <li>
                <a>About Us</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Trips</a>
              </li>
              <li>
                <a>Download</a>
              </li>
            </ul>
          )}
        </div>
        {user && (
          <div className="flex-none gap-2">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt="Tailwind CSS Navbar component" src={user.image} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/profile" className="justify-between">
                    {user.firstName+ " " + user.lastName}
                    <span className="badge">Profile</span>
                  </Link>
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
        )}
      </div>
    </>
  );
};

export default Header;
