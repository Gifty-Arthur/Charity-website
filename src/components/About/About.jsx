import React from "react";
import ab1 from "../../assets/Images/About/ab1.png";
import ab2 from "../../assets/Images/About/ab2.png";

import b1 from "../../assets/Images/Brand/b1.png";
import b2 from "../../assets/Images/Brand/b2.png";
import b3 from "../../assets/Images/Brand/b3.png";
import b4 from "../../assets/Images/Brand/b4.png";
import b5 from "../../assets/Images/Brand/b5.png";

//icons
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const About = () => {
  return (
    <div className="relative">
      <img src={ab2} alt="Slide 1" />
      <div className="absolute inset-0 flex container">
        <div className="flex flex-col md:mt-44 mt-8">
          <p className="text-white md:text-5xl text-lg  font-sue mt-2">
            What We do...
          </p>
          <h1 className="text-white font-mincho font-extrabold md:text-6xl mt-2">
            About our
            <br />
            Organization
          </h1>
        </div>
      </div>
      <div className="container">
        <div className="md:mt-20 md:flex flex-row gap-10 border-b-2 pb-8   border-[#D0D0D0] mt-10">
          <img src={ab1} alt="" />
          <div className="flex flex-col">
            <p className="font-sue text-primary text-[35px] md:mt-0 mt-4 ">
              {" "}
              About Us
            </p>
            <h1 className="font-mincho font-extrabold text-4xl text-tertiary text-md mt-4">
              Solutions to Help People in Need and Save the Planet
            </h1>
            <p className="text-custom3 text-md mt-4">
              Lorem Ipsum is simply dummy text of the printin typesetting dummy
              text ever when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
            <div className="md:w-[449px] w-full h-[44px] text-tertiary flex items-center justify-center bg-[#DEF1F0] mt-4">
              Save the Children believes every child deserves a future.
            </div>
            <a href="" target="_blank" rel="noopener noreferrer">
              <button className=" w-[115px] h-[45px]  bg-tertiary md:text-md text-sm rounded-sm text-white hover:bg-primary hover:text-white md:mt-14 mt-8 ">
                MORE ABOUT
              </button>
            </a>
          </div>
        </div>

        {/* brands*/}
        <div className=" ">
          <div className="container mt-20 ">
            <div className="md:flex items-center justify-between md:ml-0 ml-28">
              <img src={b1} alt="" className="md:mt-0 mt-10 " />
              <img src={b2} alt="" className="md:mt-0 mt-10 " />
              <img src={b3} alt="" className="md:mt-0 mt-10 " />
              <img src={b4} alt="" className="md:mt-0 mt-10 " />
              <img src={b5} alt="" className="md:mt-0 mt-10 " />
            </div>
          </div>
        </div>

        {/* Goals */}
        <div>
          <div className="flex flex-col">
            <h1 className="text-tertiary text-2xl font-mincho">Our Goal</h1>
            <p className="text-custom3 text-md fonr-work">
              Lorem Ipsum is simply dummy text of the typesetting dummy text
              ever when an unknown printer took a galley of type and scrambled
              type specimen book.
            </p>
            <div className="w-[211px] h-[56px] rounded-full flex items-center justify-center bg-[#f2f2f2] mt-6 transition delay-150 duration-300 ease-in-out">
              <IoCheckmarkCircleOutline className="text-primary" />
              <p className="ml-2">Make Donation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
