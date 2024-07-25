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
            <ul>
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
                    <FaChevronUp className="ml-2 mt-1" />
                  ) : (
                    <FaChevronDown className="ml-2" />
                  )}
                </button>
                <ul
                  className={`absolute ${
                    isOpen ? "block" : "hidden"
                  } space-y-2 bg-white border border-gray-300`}
                >
                  <li>
                    <Link
                      to="Our Team"
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="text-gray-800 cursor-pointer"
                    >
                      Volunteer
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="Organic Food"
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="text-gray-800 cursor-pointer"
                    >
                      Causes
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="Organic Food"
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="text-gray-800 cursor-pointer"
                    >
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="Organic Food"
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="text-gray-800 cursor-pointer"
                    >
                      Project
                    </Link>
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default subNav;
