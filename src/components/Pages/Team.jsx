// eslint-disable-next-line no-unused-vars
import React from "react";
//images
import mem1 from "../../assets/Images/Causes/mem1.png";
import mem2 from "../../assets/Images/Causes/mem2.png";
import mem3 from "../../assets/Images/Causes/mem3.png";
import mem5 from "../../assets/Images/Causes/mem5.png";
import mem4 from "../../assets/Images/Causes/mem4.png";
import mem6 from "../../assets/Images/Causes/mem6.png";
import mem7 from "../../assets/Images/Causes/mem7.png";

import ab4 from "../../assets/Images/About/ab4.png";

//icons
import { MdFacebook } from "react-icons/md";
import { FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";
const Team = () => {
  return (
    <div>
      <div className="relative">
        <img src={mem1} alt="" />
        <div className="absolute inset-0 flex container">
          <div className="flex flex-col md:mt-48 mt-8">
            <p className="text-white md:text-5xl text-lg  font-sue mt-2">
              Humanity Peoples...
            </p>
            <h1 className="text-white font-mincho font-extrabold md:text-6xl mt-2">
              Team Member
            </h1>
          </div>
        </div>
      </div>
      <div className="md:flex flex-col">
        <div className="md:flex flex-row gap-4 items-center justify-center ">
          <div className="flex flex-col">
            <img src={mem6} alt="" className=" md:mt-20 mt-10" />
            <div className="ml-20 text-tertiary text-md font-mincho mt-2">
              <p className="font-extrabold ">Martin Luther</p>
              <div className="flex flex-row gap-2 mt-2">
                <a href="" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={17} />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <MdFacebook size={17} />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <FaTwitter size={17} />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <FaPinterest size={17} />
                </a>
              </div>
            </div>
          </div>
          {/* 2nd image */}
          <div className="flex flex-col">
            <img src={mem5} alt="" className="md:mt-20 mt-10" />
            <div className="ml-20 text-tertiary text-md font-mincho mt-2">
              <p className="font-extrabold ">Keira Knightleys</p>
              <div className="flex flex-row gap-2 mt-2">
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
          {/* 3rd */}
          <div className="flex flex-col">
            <img src={mem7} alt="" className=" md:mt-20 mt-10" />
            <div className="ml-20 text-tertiary text-md font-mincho mt-2">
              <p className="font-extrabold ">Jack Sparrow</p>
              <div className="flex flex-row gap-2 mt-2">
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
          {/* 4th */}
        </div>

        {/* down */}
        <div className="md:flex flex-row gap-4 items-center justify-center">
          <div className="flex flex-col">
            <img src={mem2} alt="" className=" md:mt-20 mt-10" />
            <div className="ml-20 text-tertiary text-md font-mincho mt-2">
              <p className="font-extrabold ">Martin Luther</p>
              <div className="flex flex-row gap-2 mt-2">
                <a href="" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={17} />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <MdFacebook size={17} />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <FaTwitter size={17} />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <FaPinterest size={17} />
                </a>
              </div>
            </div>
          </div>
          {/* 2nd image */}
          <div className="flex flex-col">
            <img src={mem3} alt="" className="md:mt-20 mt-10" />
            <div className="ml-20 text-tertiary text-md font-mincho mt-2">
              <p className="font-extrabold ">Keira Knightleys</p>
              <div className="flex flex-row gap-2 mt-2">
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
          {/* 3rd */}
          <div className="flex flex-col">
            <img src={mem4} alt="" className=" md:mt-20 mt-10" />
            <div className="ml-20 text-tertiary text-md font-mincho mt-2">
              <p className="font-extrabold ">Jack Sparrow</p>
              <div className="flex flex-row gap-2 mt-2">
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
      </div>
      <div className="mb-20"></div>

      {/* newsletter */}
      <div className="relative md:mt-0 mt-10">
        <img src={ab4} alt="" className="md:h-[448px] h-[400px]" />
        <div className="absolute inset-0   items-center justify-center container">
          <div className="flex flex-col items-center justify-center">
            <p className="text-white md:text-5xl text-lg  font-sue mt-10">
              Subscribe
            </p>
            <h1 className="text-white font-mincho font-extrabold md:text-6xl mt-2">
              Newsletter
            </h1>
            <p className="text-white font-work text-center md:mt-4">
              Save the Children believes every child deserves a future. In the
              U.S. and <br></br>around the world, we give children a healthy
              start in life.
            </p>
            <section className="bg">
              <div className="py-8 lg:py-8 ">
                <form action="#" className="space-y-8">
                  <div className="flex flex-row gap-4">
                    <div className="mb-5">
                      <label
                        htmlFor="email"
                        className="block  mb-2 text-sm font-mediumc dark:text-custom3"
                      ></label>
                      <input
                        type="email"
                        id="email"
                        className="text-black  rounded-full  text-sm block md:w-[359px] w-[259px] p-2.5 bg-white  font-work text-md  dark:placeholder-custom3 dark:text-custom3  "
                        placeholder="Enter Your Email Address"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="text-white bg-tertiary hover:bg-blue-800 w-[102px] h-[39px] focus:ring-4 focus:outline-none  font-medium  text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-tertiary dark:hover:bg-custom3 rounded-full md:mt-2 mt-2"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
