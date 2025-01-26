import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [sideMenu, setSideMenu] = useState(false);

  // Toggle menu state
  const toggleMenu = () =>{
    setSideMenu((prev) => !prev);
  } 

  return (
    <div className="flex items-center justify-center xs:w-full relative">
      <nav className="flex items-center justify-between px-12 py-6 md:p-6 text-black max-w-[1178px] w-full">
        {/* Logo */}
        <div className="logo">
          <p className="text-2xl">🍕</p>
        </div>

        {/* Links */}
        <div className="links sm:mx-48 hidden md:flex items-center justify-center">
          <ul className="flex items-center space-x-4">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Services</li>
            <li className="cursor-pointer">Page</li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="btns flex gap-x-3 hidden md:block">
          <button className="nav-btn w-28 p-1">Login</button>
          <button className="nav-btn w-[115px] py-3 rounded-full px-4 bg-primary text-base text-white">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden cursor-pointer p-2 text-gray-700"
          title="Menu"
          style={{zIndex:50}}
        >
          {sideMenu ? <IoClose size={28} /> : <HiMenu size={28} />}
        </button>
      </nav>

      {/* Side Menu */}
      {sideMenu && (
        <div className="fixed inset-0 bg-black/50 z-20" onClick={toggleMenu}>
          <div
            className="absolute top-0 right-0 w-64 h-full bg-white shadow-md z-30"
            // Prevent closing when clicking inside menu
          >
            {/* Menu Items */}
            <ul className="flex flex-col items-start p-4 space-y-3">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Services</li>
              <li className="cursor-pointer">Page</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
