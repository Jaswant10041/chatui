import React from 'react';
import { FaInstagram } from "react-icons/fa6";
import { BiLogoTelegram } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col sm:flex-row justify-between items-center bg-black text-pink-200 py-4 px-4">
      <div className="text-lg font-bold">
        Logo
      </div>
      <div className="flex items-center space-x-6 mt-3 sm:mt-0">
        <p className="text-sm">Contact@00000000.tech</p>
        <div className="flex space-x-2">
          <BiLogoTelegram />
          <FaInstagram />
          <FaXTwitter />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
