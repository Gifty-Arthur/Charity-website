// eslint-disable-next-line no-unused-vars
import React from "react";

import SubNav from "./SubNav";

//icons
import { IoIosCall, IoMdMail } from "react-icons/io";
import { MdFacebook } from "react-icons/md";
import { FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <div className="w-full h-[62px] bg-secondary ">
        <div className="container ">
          <div className="flex items-center justify-between">
            <div className="flex flex-row gap-8 text-custom5 text-md font-work ">
              <a href="" target="_blank" rel="noopener noreferrer">
                <div className="flex flex-row gap-1 hover:text-custom1">
                  <IoIosCall className="mt-1" />
                  <p className="">+01 569 896 654</p>
                </div>
              </a>
              {/* mail */}
              <a href="" target="_blank" rel="noopener noreferrer">
                <div className="flex flex-row gap-1 hover:text-custom1">
                  <IoMdMail className="mt-1" />
                  <p>info@charity.com</p>
                </div>
              </a>
            </div>
            {/* Social media */}
            <div className="flex flex-row gap-2 w-[130px] bg-[#4BC9C4]  h-[60px] items-center justify-center">
              <a href="" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={17} className="hover:text-custom1" />
              </a>
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

      <SubNav />
    </div>
  );
};

export default Navbar;
