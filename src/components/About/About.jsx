// eslint-disable-next-line no-unused-vars
import React from "react";
import ab1 from "../../assets/Images/About/ab1.png";
import ab2 from "../../assets/Images/About/ab2.png";
import ab3 from "../../assets/Images/About/ab3.png";
import ab4 from "../../assets/Images/About/ab4.png";

import b1 from "../../assets/Images/Brand/b1.png";
import b2 from "../../assets/Images/Brand/b2.png";
import b3 from "../../assets/Images/Brand/b3.png";
import b4 from "../../assets/Images/Brand/b4.png";
import b5 from "../../assets/Images/Brand/b5.png";
import v1 from "../../assets/Images/Brand/v1.png";
import v2 from "../../assets/Images/Brand/v2.png";
import v3 from "../../assets/Images/Brand/v3.png";
import v4 from "../../assets/Images/Brand/v4.png";

//icons
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { MdFacebook } from "react-icons/md";
import { FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";

const About = () => {
  return (
    <div>
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
                Lorem Ipsum is simply dummy text of the printin typesetting
                dummy text ever when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
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
          <div className="md:flex md:mt-20 flex-row gap-16 mt-10">
            <div className="flex flex-col">
              <h1 className="text-tertiary text-2xl font-mincho">Our Goal</h1>
              <p className="text-custom3 text-md fonr-work">
                Lorem Ipsum is simply dummy text of the typesetting dummy
                <br /> text ever when an unknown printer took a galley of type
                and
                <br />
                scrambled type specimen book.
              </p>
              <div className="flex flex-col">
                <div className="md:flex flex-row gap-3">
                  <div className="md:w-[211px] w-full h-[56px] rounded-full flex items-center justify-center bg-[#f2f2f2] mt-6 ">
                    <IoCheckmarkCircleOutline className="text-primary" />
                    <p className="ml-2 text-custom3 font-work ">
                      Make Donation
                    </p>
                  </div>
                  <div className="md:w-[219px] w-full h-[56px] rounded-full flex items-center justify-center bg-[#f2f2f2] mt-6 ">
                    <IoCheckmarkCircleOutline className="text-primary" />
                    <p className="ml-2 text-custom3 font-work">
                      Donation Reached 10M
                    </p>
                  </div>
                </div>
                {/* 3rd */}
                <div className="md:flex flex-row gap-3">
                  <div className="md:w-[211px] w-full h-[56px] rounded-full flex items-center justify-center bg-[#f2f2f2] mt-6 ">
                    <IoCheckmarkCircleOutline className="text-primary" />
                    <p className="ml-2 text-custom3 font-work">
                      Education For All
                    </p>
                  </div>
                  <div className="md:w-[219px] w-full h-[56px] rounded-full flex items-center justify-center bg-[#f2f2f2] mt-6 ">
                    <IoCheckmarkCircleOutline className="text-primary" />
                    <p className="ml-2 text-custom3 font-work">
                      Become A Volunteer
                    </p>
                  </div>
                </div>
                <div className="md:w-[269px] w-full h-[56px] rounded-full flex items-center justify-center bg-[#f2f2f2] mt-6 ">
                  <IoCheckmarkCircleOutline className="text-primary" />
                  <p className="ml-2 text-custom3 font-work">
                    Food For Poor People dayle
                  </p>
                </div>
                <p className="text-custom3 text-md fonr-work mt-2">
                  Lorem Ipsum is simply dummy text of the typesetting dummy
                  <br /> text ever when an unknown printer took a galley of type
                  and scrambled type specimen book.
                </p>
              </div>
            </div>
            {/* our mission */}
            <div className="flex flex-col">
              <h1 className="text-tertiary text-2xl font-mincho md:mt-0 mt-6">
                Our Mission
              </h1>
              <p className="text-custom3 text-md fonr-work">
                Lorem Ipsum is simply dummy text of the typesetting dummy text
                ever when an unknown printer took a galley of type and scrambled
                type specimen book.
              </p>
              <img src={ab3} alt="" className="mt-6" />
            </div>
          </div>
        </div>
        {/* volunteer team */}
        <div className=" bg-[#F1EEEC] md:h-[800px] mt-20">
          <div className="container">
            <div className="text-center ">
              <p className="font-sue text-primary text-[35px]  p-4">Team</p>
              <h1 className="font-mincho font-extrabold text-4xl text-tertiary text-md">
                Our Volunteers
              </h1>
            </div>
            <div className="md:flex items-center justify-between">
              <div className="flex flex-col">
                <img src={v1} alt="" className=" md:mt-20 mt-10" />
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
                <img src={v2} alt="" className="md:mt-20 mt-10" />
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
                <img src={v3} alt="" className=" md:mt-20 mt-10" />
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
              <div className="bg-secondary sm:w-[235px] h-[435px] w-full md:mt-20 mt-10">
                <div className="flex flex-col items-center justify-center mt-10">
                  <img src={v4} alt="" className="mt-8 md:mt-0" />
                  <h1 className="text-xl text-tertiary text-center font-mincho font-extrabold mt-4">
                    Become <br></br>a Volunteer
                  </h1>
                  <p className="text-md text-tertiary font-work p-4 md:ml-0 ml-10">
                    Centuries but also the leap electtypesetting, remaining{" "}
                  </p>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdv2SmFg74PI7srZVQMLwiNxBS3ZO5PUe492SmxOzSBTtNfMw/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className=" w-[190px]  h-[45px]  bg-tertiary rounded-full text-white hover:bg-custom3 shadow-md  mt-10">
                      JOIN US TODAY
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* newsletter */}
      <div>
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
    </div>
  );
};

export default About;
