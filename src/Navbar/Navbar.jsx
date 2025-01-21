import React from "react";
import "./navbar.css";
import { HiMenu } from "react-icons/hi";
function Navbar() {
  return (
    <div className="flex items-center justify-center">
      <nav className="flex items-center justify-between p-6  text-black max-w-[1178px] ">
        <div className="logo">
          <p className="text-2xl">🍕</p>
        </div>
        <div className="links mx-48">
          <ul className=" hidden   md:flex items-center justify-center  ">
            <li className="mx-3 cursor-pointer">Home</li>
            <li className="mx-3 cursor-pointer">About</li>
            <li className="mx-3 cursor-pointer">Services</li>
            <li className="mx-3 cursor-pointer">Page</li>
          </ul>
        </div>
        <div className="btns flex gap-x-3">
          <button
            className="nav-btn w-28 p-1  hidden md:block">
            Login
          </button>
          <button
            className="nav-btn p-3 rounded-full px-4 bg-primary hidden md:block text-base text-white w-px-[115px]">
            Sign Up
          </button>
        </div>
        <HiMenu
          size={24}
          title="Menu"
          className="md:hidden nav-bar-icon-btn "
        />
      </nav>
    </div>
  );
}

export default Navbar;
