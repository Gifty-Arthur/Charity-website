import { useState } from "react";
import { Link } from "react-router-dom";
//images
import logo from "../../assets/Images/Home/logo.png";
//icons
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function subNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-full h-[114] bg-white">
      <div className="container">
        <div>
          <img src={logo} alt="" />
          <div>
            {/* main web */}
            <ul className="text-md font-medium font-work">
              <li>
                <Link
                  to="/"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className=" transition-all cursor-pointer "
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
                  className=" transition-all cursor-pointer "
                >
                  About Us
                </Link>
              </li>
              {/* Pages */}
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center text-gray-800 cursor-pointer"
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
                  className=" transition-all cursor-pointer "
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
                  className=" transition-all cursor-pointer "
                >
                  Contact
                </Link>
              </li>

              {/* button */}
              <Link>
                <button className=" w-[125px] h-[35px] bg-primary rounded-lg text-white">
                  DONATE
                </button>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default subNav;
