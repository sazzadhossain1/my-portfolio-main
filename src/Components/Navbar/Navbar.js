import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 color">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabindex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link className="font" to="/home">
                  Home
                </Link>
              </li>
              <li>
                <Link className="font" to="/blog">
                  Blogs
                </Link>
              </li>

              <li>
                <a
                  className="font a-style"
                  href="https://form.jotform.com/221593692553463"
                  target="blank"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <Link
            to="/home"
            className="btn btn-ghost normal-case text-xl ml-52 name"
          >
            Sazzad <span className="last-name"> Hossain</span>
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex mr-52">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link className="font" to="/home">
                Home
              </Link>
            </li>
            <li>
              <Link className="font" to="/blog">
                Blogs
              </Link>
            </li>

            <li>
              <a
                className="font a-style"
                href="https://form.jotform.com/221593692553463"
                target="blank"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
