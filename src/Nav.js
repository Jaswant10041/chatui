import React from "react";
import { FaHome } from "react-icons/fa";
import { LiaGripLinesVerticalSolid } from "react-icons/lia";
import { MdCreate } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
const Nav = () => {
  return (
    <div className="flex pt-4 mx-auto justify-between pl-14 ml-5 text-pink-200 bg-black">
      <div className="flex">
        <a href="#">
          <div className="font-extrabold text-3xl">Logo</div>
        </a>
        <div className="flex pt-0.5">
        <div>
          <LiaGripLinesVerticalSolid className="text-xl m-2" />
        </div>
        <a href="#">
        <div>
          <div className="items-center justify-center text-xl m-2">
            <FaHome />
          </div>
          </div>
        </a>
        <a href="#" >
          <div className="font-medium text-normal m-2">Explore</div>
        </a>
        <a href="#" >
          <div className="text-xl m-2">
            <MdCreate />
          </div>
        </a>
        <a href="#" >
          <div className="font-medium text-normal m-2">Create</div>
        </a>
        <a href="#" >
          <div className="text-xl m-2">
            <FaEdit />
          </div>
        </a>
        <a href="#" >
          <div className="font-medium text-normal m-2">Edit</div>
        </a>
      </div></div>
      <div className="m-2 pr-12 mr-7">
        <button className="border-2 text-black bg-pink-200 rounded-full px-7 ">Login</button>
      </div>
    </div>
  );
};

export default Nav;
