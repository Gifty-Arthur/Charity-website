import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
//images
import logo1 from "../../assets/Images/Home/logo1.png";

//icons
import { MdFacebook } from "react-icons/md";
import { FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <div className="w-full h-full bg-tertiary">
      <div className="container">
        <div className="md:flex items-center justify-between">
          <div className="flex flex-col">
            <img src={logo1} alt="" className=" w-[200px] h-[60px]" />
            <p className="text-white font-sans text-md">
              Care about people to transforming <br />
              their lives and exudes a positives <br />
              Impressiono believe. fundraising
              <br /> NGO organizations.
            </p>
            <div className="flex flex-row gap-2   text-white mt-6">
              <div className="h-[40px] w-[40px] rounded-full bg-[#384C56] flex items-center justify-center">
                <a href="" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="hover:text-primary " />
                </a>
              </div>
              <div className="h-[40px] w-[40px] rounded-full bg-[#384C56] flex items-center justify-center">
                <a href="" target="_blank" rel="noopener noreferrer">
                  <MdFacebook siz={28} className="hover:text-primary " />
                </a>
              </div>
              <div className="h-[40px] w-[40px] rounded-full bg-[#384C56] flex items-center justify-center">
                <a href="" target="_blank" rel="noopener noreferrer">
                  <FaTwitter siz={28} className="hover:text-primary " />
                </a>
              </div>
              <div className="h-[40px] w-[40px] rounded-full bg-[#384C56] flex items-center justify-center">
                <a href="" target="_blank" rel="noopener noreferrer">
                  <FaPinterest siz={28} className="hover:text-primary " />
                </a>
              </div>
            </div>
          </div>
          {/* About */}
          <div className="md:w-[723px] h-[269px] bg-[#384C56] py-4 mt-10">
            <div className="flex items-center justify-between">
              <div className="flex flex-col p-6">
                <h1 className="font-mincho font-bold text-xl text-white">
                  Get Involved
                </h1>
                <Link
                  to="/"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className={`transition-all cursor-pointer hover:text-primary text-md text-white mt-4${
                    isHomePage ? "" : ""
                  }`}
                >
                  About Us
                </Link>
                <Link
                  to="/"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className={`transition-all cursor-pointer hover:text-primary text-md text-white mt-1 ${
                    isHomePage ? "" : ""
                  }`}
                >
                  Volunteer
                </Link>
                {/* causes */}
                <Link
                  to="/"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className={`transition-all cursor-pointer hover:text-primary text-md mt-1 ${
                    isHomePage ? "text-red-500" : ""
                  }`}
                >
                  Causes
                </Link>
                {/* Projects */}
                <Link
                  to="/"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className={`transition-all cursor-pointer hover:text-primary text-md text-white mt-1 ${
                    isHomePage ? "text-red-500" : ""
                  }`}
                >
                  Projects
                </Link>
                {/* team */}
                <Link
                  to="/"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className={`transition-all cursor-pointer hover:text-primary text-md text-white mt-1 ${
                    isHomePage ? "" : ""
                  }`}
                >
                  About Us
                </Link>
              </div>

              {/* utility */}
              <div className="flex flex-col p-6">
                <h1 className="font-mincho font-bold text-xl text-white">
                  Utility
                </h1>

                <Link
                  to="/"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className={`transition-all cursor-pointer hover:text-primary text-md text-white mt-4${
                    isHomePage ? "" : ""
                  }`}
                >
                  Style Guide
                </Link>
                <Link
                  to="/"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className={`transition-all cursor-pointer hover:text-primary text-md text-white mt-1 ${
                    isHomePage ? "" : ""
                  }`}
                >
                  Licences
                </Link>
                {/* causes */}
                <Link
                  to="/"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className={`transition-all cursor-pointer text-white hover:text-primary text-md mt-1 ${
                    isHomePage ? "" : ""
                  }`}
                >
                  Password
                </Link>
                {/* Projects */}
                <Link
                  to="/"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className={`transition-all cursor-pointer hover:text-primary text-md text-white mt-1 ${
                    isHomePage ? "" : ""
                  }`}
                >
                  404 Page
                </Link>
                {/* team */}
                <Link
                  to="/"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className={`transition-all cursor-pointer hover:text-primary text-md text-white mt-1 ${
                    isHomePage ? "" : ""
                  }`}
                >
                  Changelog
                </Link>
              </div>
              {/* Contacts */}
              <div className="flex flex-col p-6">
                <h1 className="font-mincho font-bold text-xl text-white">
                  Contact
                </h1>

                {/* causes */}
                <Link
                  to="/"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className={`transition-all cursor-pointer text-white hover:text-primary text-md mt-1 ${
                    isHomePage ? "" : ""
                  }`}
                >
                  660 Broklyn Street, 88
                </Link>
                {/* Projects */}
                <Link
                  to="/"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className={`transition-all cursor-pointer hover:text-primary text-md text-white mt-1 ${
                    isHomePage ? "" : ""
                  }`}
                >
                  New York
                </Link>
                {/* team */}
                <Link
                  to="/"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className={`transition-all cursor-pointer hover:text-primary text-md text-white mt-10 ${
                    isHomePage ? "" : ""
                  }`}
                >
                  help Need@walfare.com
                </Link>
                <Link
                  to="/"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className={`transition-all cursor-pointer hover:text-primary text-md text-white mt-1 ${
                    isHomePage ? "" : ""
                  }`}
                >
                  222 888 0000
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
