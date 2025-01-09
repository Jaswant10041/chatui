import React from "react";
import { FaHome } from "react-icons/fa";
import { LiaGripLinesVerticalSolid } from "react-icons/lia";
import { MdCreate } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const Nav = () => {
  return (
    <nav className="flex items-center pt-4 mx-auto justify-between px-8 lg:px-14 text-pink-200 bg-black shadow-lg">
      <div className="flex items-center space-x-4">
        <a href="#" className="text-3xl font-extrabold hover:text-pink-300">
          Logo
        </a>
        <LiaGripLinesVerticalSolid className="text-xl text-pink-400" />
        <a href="#" className="flex items-center space-x-1 text-xl hover:text-pink-300">
          <FaHome />
          <span className="ml-1">Explore</span>
        </a>
        <a href="#" className="flex items-center space-x-1 text-xl hover:text-pink-300">
          <MdCreate />
          <span className="ml-1">Create</span>
        </a>
        <a href="#" className="flex items-center space-x-1 text-xl hover:text-pink-300">
          <FaEdit />
          <span className="ml-1">Edit</span>
        </a>
      </div>
      <button className="border-2 text-black bg-pink-200 rounded-full px-7 py-2 hover:bg-pink-300">
        Login
      </button>
    </nav>
  );
};

export default Nav;
