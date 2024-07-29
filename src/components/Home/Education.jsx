// eslint-disable-next-line no-unused-vars
import React from "react";
import Little from "./Little";
//icons
import { MdArrowRight } from "react-icons/md";
import { IoMdCheckmarkCircle } from "react-icons/io";
//images
import ed1 from "../../assets/Images/Education/ed1.png";

const Education = () => {
  return (
    <div className="relative md:z-10">
      <div className="container">
        {/* educatio  */}
        <div className="md:flex flex-row items center justify-center">
          <div className="bg-secondary md:w-[398px] md:h-[330px] w-full h-[250px] md:-mt-16 mt-2 shadow-md flex items-center justify-center ">
            <div className="md:p-4 p-2">
              <h1 className="text-tertiary font-extrabold md:text-[35px] font-mincho ">
                Education
              </h1>
              <p className="text-[#4A4A4A] text-sm md:mt-2 mt-1 font-work">
                Below Poverty Line is enchmark used by the government of India
                economic disadvantage.
              </p>
              <a href="" target="_blank" rel="noopener noreferrer">
                <button className=" w-[115px] h-[45px]  bg-white md:text-md text-sm rounded-sm text-tertiary hover:bg-primary hover:text-white md:mt-14 mt-8 ">
                  DISCOVER
                </button>
              </a>
            </div>
          </div>
          {/* volum */}
          <div className="bg-tertiary md:w-[398px] md:h-[330px] w-full h-[250px] md:-mt-16 mt-2 shadow-md  flex ">
            <div className="md:p-6 p-2 md:mt-6">
              <h1 className="text-white font-extrabold md:text-[35px] font-mincho ">
                Become a Volunteer
              </h1>
              <p className="text-white text-sm md:mt-2 mt-4 font-work">
                Below Poverty Line is enchmark used by the government
              </p>
              <a href="" target="_blank" rel="noopener noreferrer">
                <div className="mt-8 text-white underline font-work text-sm md:mt-8 ">
                  JOIN ORGANIZATION
                </div>
              </a>
            </div>
          </div>
          {/* img */}
          <div className="md:-mt-16 mt-2 ">
            <div className="relative">
              <img
                src={ed1}
                alt=""
                className=" md:w-[398px] md:h-[330px] w-full h-[250px]"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <a
                  href="https://www.youtube.com/watch?v=mPRXhNFPgwo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="bg-white rounded-full md:w-[86px] md:h-[86px] w-[50px] h-[50px] flex items-center justify-center">
                    <MdArrowRight size={30} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* people */}

        <div className="mt-14">
          <div className="md:flex items-center justify-between ">
            <div className="flex flex-col ">
              <p className="font-sue text-primary md:text-[35px]">About Us</p>
              <h1 className="font-mincho font-extrabold md:text-4xl text-md">
                Help People, <br />
                Our Main Goals
              </h1>
              <p className="font-work text-[#727272] text-md mt-2">
                Lorem Ipsum is simply dummy text of the printin typesetting
                <br />
                dummy text ever when an unknown printer took a galley of type
                <br />
                and scrambled it to make a type specimen book.{" "}
              </p>
              <p className="font-work text-[#727272] text-md mt-4 ">
                It has survived not only five centuries, but also the leap into
                electronic
                <br /> typesetting, remaining when an unknown printer took a
                galley of type and
                <br /> scrambled it to make a type specimen book. essentially.
              </p>
              <a href="" target="_blank" rel="noopener noreferrer">
                <button className=" w-[115px] h-[45px]  bg-primary md:text-md text-sm rounded-sm text-white hover:bg-primary hover:text-white md:mt-14 mt-8 ">
                  MORE ABOUT
                </button>
              </a>
            </div>
            {/* b */}
            <div className=" md:w-[449px] md:h-[379px] bg-[#ecf1f0] w-full ">
              <div className="p-8 mt-8">
                <div className="flex md:flex-row md:gap-8  items-center justify-between">
                  <div className="flex flex-col">
                    <div className="flex flex-row gap-2">
                      <IoMdCheckmarkCircle className="text-secondary mt-1" />
                      <p className="text-[#727272] text-sm">Food Donation</p>
                    </div>
                    <div className="flex flex-row gap-2">
                      <IoMdCheckmarkCircle className="text-secondary mt-1" />
                      <p className="text-[#727272] text-sm">Money Donation</p>
                    </div>
                    <div className="flex flex-row gap-2">
                      <IoMdCheckmarkCircle className="text-secondary mt-1" />
                      <p className="text-[#727272]">Dress Donation</p>
                    </div>
                  </div>
                  {/* row */}
                  <div className="flex flex-col">
                    <div className="flex flex-row gap-2 ">
                      <IoMdCheckmarkCircle className="text-secondary mt-1" />
                      <p className="text-[#727272] text-sm">Water Supplay</p>
                    </div>
                    <div className="flex flex-row gap-2 ">
                      <IoMdCheckmarkCircle className="text-secondary mt-1" />
                      <p className="text-[#727272]">Education Donation</p>
                    </div>
                    <div className="flex flex-row gap-2 text-[#727272]">
                      <IoMdCheckmarkCircle className="text-secondary mt-1" />
                      <p className="text-[#727272] text-sm">Toys Donation</p>
                    </div>
                  </div>
                </div>

                {/* total */}
                <div className="mt-8">
                  <h1 className="font-extrabold font-mincho text-[25px] text-tertiary">
                    Total Donation
                  </h1>
                  <div className="rounded-full h-1 w-full bg-gray-500 mt-2">
                    <div className="bg-primary h-1 md:w-[300px] w-[150px] rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <p className="font-mincho font-extrabold text-md text-tertiary">
                      Collection - $5M
                    </p>
                    <p className="font-mincho font-extrabold text-md text-tertiary">
                      Goal-$10M
                    </p>
                  </div>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <button className=" w-[115px] h-[45px]  bg-white md:text-md text-sm rounded-sm text-tertiary hover:bg-primary hover:text-white md:mt-8 mt-8 ">
                      DONATE
                    </button>
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Little />
    </div>
  );
};

export default Education;
