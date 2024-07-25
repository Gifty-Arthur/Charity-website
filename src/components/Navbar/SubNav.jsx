/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
//images
import logo from "../../assets/Images/Home/logo.png";
//icons
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

function subNav() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  return (
    <div className="w-full h-[68px] bg-white shadow-md z-20 left-0 sticky top-20">
      <div className="container">
        <div className="  items-center justify-between sm:flex hidden">
          <a href="">
            <img src={logo} alt="" className="cursor-pointer" />
          </a>
          <div className="">
            {/* main web */}
            <ul className="text-md font-medium font-work flex flex-row space-x-8 mt-4 items-center justify-center">
              <li>
                <Link
                  to="/"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className={`transition-all cursor-pointer hover:text-primary ${
                    isHomePage ? "text-red-500" : ""
                  }`}
                >
                  Home
                </Link>
              </li>

              {/* about */}
              <li>
                <Link
                  to="/"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className={`transition-all cursor-pointer hover:text-primary ${
                    isHomePage ? "" : ""
                  }`}
                >
                  About Us
                </Link>
              </li>
              {/* Pages */}
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className={`transition-all cursor-pointer hover:text-primary flex items-center ${
                    isHomePage ? "" : ""
                  }`}
                >
                  Pages
                  {isOpen ? (
                    <FaChevronUp size={10} className="ml-1 mt-1" />
                  ) : (
                    <FaChevronDown size={10} className="ml-1 mt-1" />
                  )}
                </button>
                <ul
                  className={`absolute  ${
                    isOpen ? "block" : "hidden"
                  } space-y-2 bg-white rounded border-[1px] py-4 border-gray-300 top-[30px] w-[180px] shadow-md`}
                >
                  <li className="hover:bg-gray-300">
                    <Link
                      to="/"
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="text-gray-800 cursor-pointer px-8 p-1 block w-full"
                    >
                      Volunteer
                    </Link>
                  </li>

                  <li className="hover:bg-gray-300">
                    <Link
                      to="/"
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="text-gray-800 cursor-pointer px-8 p-1 block w-full"
                    >
                      Causes
                    </Link>
                  </li>
                  <li className="hover:bg-gray-300">
                    <Link
                      to="/"
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="text-gray-800 cursor-pointer px-8 p-1 block w-full"
                    >
                      Team
                    </Link>
                  </li>
                  <li className="hover:bg-gray-300">
                    <Link
                      to="/"
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="text-gray-800 cursor-pointer px-8 p-1 block w-full"
                    >
                      Projects
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Events */}
              <li>
                <Link
                  to="/"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className={`transition-all cursor-pointer hover:text-primary ${
                    isHomePage ? "" : ""
                  }`}
                >
                  Event
                </Link>
              </li>
              {/* contact */}
              <li>
                <Link
                  to="/"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className={`transition-all cursor-pointer hover:text-primary ${
                    isHomePage ? "" : ""
                  }`}
                >
                  Contact
                </Link>
              </li>

              {/* button */}
              <a href="" target="_blank" rel="noopener noreferrer">
                <button className=" w-[115px] h-[35px] bg-primary rounded-full text-white hover:bg-custom3 -mt-4">
                  DONATE
                </button>
              </a>
            </ul>
          </div>
        </div>

        {/* mobile view */}
        <div className="sm:hidden">
          <div className="flex items-center justify-between">
            <a href="">
              <img src={logo} alt="" className="cursor-pointer mt-2" />{" "}
            </a>
            <div className="md:hidden flex items-center cursor-pointer mt-4">
              {menu ? (
                <IoCloseSharp size={25} onClick={handleChange} />
              ) : (
                <IoIosMenu size={25} onClick={handleChange} />
              )}
            </div>
          </div>

          <div>
            <ul
              className={` ${
                menu ? "translate-x-0" : "-translate-x-full"
              } lg:hidden flex flex-col   mt-10  gap-6 w-full  text-md font-medium font-work`}
            >
              <li>
                <Link
                  to="/"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className={`transition-all cursor-pointer hover:text-primary ${
                    isHomePage ? "text-red-500" : ""
                  }`}
                >
                  Home
                </Link>
              </li>

              {/* about */}
              <li>
                <Link
                  to="/"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className={`transition-all cursor-pointer hover:text-primary ${
                    isHomePage ? "" : ""
                  }`}
                >
                  About Us
                </Link>
              </li>
              {/* Pages */}
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className={`transition-all cursor-pointer hover:text-primary flex items-center ${
                    isHomePage ? "" : ""
                  }`}
                >
                  Pages
                  {isOpen ? (
                    <FaChevronUp size={10} className="ml-1 mt-1" />
                  ) : (
                    <FaChevronDown size={10} className="ml-1 mt-1" />
                  )}
                </button>
                <ul
                  className={`absolute  ${
                    isOpen ? "block" : "hidden"
                  } space-y-2 bg-white rounded border-[1px] py-4 border-gray-300 top-[30px] w-[180px] shadow-md`}
                >
                  <li className="hover:bg-gray-300">
                    <Link
                      to="/"
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="text-gray-800 cursor-pointer px-8 p-1 block w-full"
                    >
                      Volunteer
                    </Link>
                  </li>

                  <li className="hover:bg-gray-300">
                    <Link
                      to="/"
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="text-gray-800 cursor-pointer px-8 p-1 block w-full"
                    >
                      Causes
                    </Link>
                  </li>
                  <li className="hover:bg-gray-300">
                    <Link
                      to="/"
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="text-gray-800 cursor-pointer px-8 p-1 block w-full"
                    >
                      Team
                    </Link>
                  </li>
                  <li className="hover:bg-gray-300">
                    <Link
                      to="/"
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="text-gray-800 cursor-pointer px-8 p-1 block w-full"
                    >
                      Projects
                    </Link>
                  </li>
                </ul>
              </div>
              {/* Events */}
              <li>
                <Link
                  to="/"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className={`transition-all cursor-pointer hover:text-primary ${
                    isHomePage ? "" : ""
                  }`}
                >
                  Event
                </Link>
              </li>
              {/* contact */}
              <li>
                <Link
                  to="/"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className={`transition-all cursor-pointer hover:text-primary ${
                    isHomePage ? "" : ""
                  }`}
                >
                  Contact
                </Link>
              </li>

              {/* button */}
              <a href="" target="_blank" rel="noopener noreferrer">
                <button className=" w-[115px] h-[35px] bg-primary rounded-sm text-white hover:bg-custom3 mt-2">
                  DONATE
                </button>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default subNav;
