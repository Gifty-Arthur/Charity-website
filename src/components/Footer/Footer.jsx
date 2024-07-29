import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
//images
import logo1 from "../../assets/Images/Home/logo1.png";

//icons
import { MdFacebook } from "react-icons/md";
import { FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-tertiary">
      <div className="container">
        <img src={logo1} alt="" className="" />
        <div className="flex flex-col">
          <p className="text-white">
            Care about people to transforming their lives and exudes a positives
            Impressiono believe. fundraising NGO organizations.
          </p>
          <div className="flex flex-row gap-2   text-white">
            <div className="h-[60px] w-[60px] rounded-full bg-[#384C56]">
              <a href="" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="hover:text-primary " />
              </a>
            </div>
            <a href="" target="_blank" rel="noopener noreferrer">
              <MdFacebook size={17} className="hover:text-custom1" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={17} className="hover:text-custom1" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaPinterest size={17} className="hover:text-custom1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
