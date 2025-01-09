import React from 'react';
import { FaInstagram } from "react-icons/fa6";
import { BiLogoTelegram } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="w-full flex justify-between items-center bg-black text-pink-200 py-4 ">
      
      <div className="text-lg font-bold">
        Logo
      </div>

      {/* Contact Info */}
      <div className="flex items-center space-x-6">
        <p className="text-sm">Contact@00000000.tech</p>

        {/* Social Icons */}
        <div className="flex space-x-2 ">
          
          <BiLogoTelegram />
          <FaInstagram /> 
          <FaXTwitter /> 
        </div>
      </div>
    </footer>
  );
};

export default Footer;
