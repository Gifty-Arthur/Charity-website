// eslint-disable-next-line no-unused-vars
import React from "react";

//icons
import { IoIosCall, IoMdMail } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="w-full h-[72px] bg-secondary ">
      <div className="container ">
        <div className="flex">
          <div className="flex flex-row gap-8">
            <div className="flex flex-row gap-1 ">
              <IoIosCall className="mt-1" />
              <p>+01 569 896 654</p>
            </div>
            {/* mail */}
            <div className="flex flex-row gap-1 ">
              <IoMdMail className="mt-1" />
              <p>info@charity.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
