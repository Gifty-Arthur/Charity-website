// eslint-disable-next-line no-unused-vars
import React from "react";

//icons
import { IoMailOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import { FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";

import c1 from "../../assets/Images/Events/c1.png";

const Contact = () => {
  return (
    <div>
      <div>
        <div className="relative">
          <img src={c1} alt="" />
          <div className="absolute inset-0 flex container">
            <div className="flex flex-col md:mt-48 mt-8">
              <p className="text-white md:text-5xl text-lg  font-sue mt-2">
                Contact
              </p>
              <h1 className="text-white font-mincho font-extrabold md:text-6xl mt-2">
                Get in Touch
              </h1>
            </div>
          </div>
        </div>

        <div className="container mt-20">
          <div className="md:flex items-center justify-between">
            <div className="flex flex-col">
              <p className="font-sue text-primary md:text-[35px] ">Contact</p>
              <h1 className="font-mincho font-extrabold md:text-4xl text-md text-tertiary">
                Get in Touch With Us
              </h1>
              <p className="text-custom3 mt-2">
                Lorem Ipsum is simply dummy text of the printin <br />{" "}
                typesetting dummy text ever when an unknown printer
                <br /> took a galley of type and scrambled it to make a type
                <br />
                specimen book.{" "}
              </p>
              <div className="flex flex-row gap-4">
                <div className="w-[70px] h-[70px] bg-[#F2F2F2] flex items-center justify-center mt-4">
                  <IoMailOutline size={28} className="text-primary" />
                </div>
                <div className="flex flex-col mt-7">
                  <p className="font-extrabold text-tertiary font-mincho">
                    Message
                  </p>
                  <p className="text-custom3 font-work">support@walfare.com</p>
                </div>
              </div>
              <div className="flex flex-row gap-4">
                <div className="w-[70px] h-[70px] bg-[#F2F2F2] flex items-center justify-center mt-4">
                  <FaPhoneAlt size={28} className="text-primary" />
                </div>
                <div className="flex flex-col mt-7">
                  <p className="font-extrabold text-tertiary font-mincho">
                    Contact Us
                  </p>
                  <p className="text-custom3 font-work">+01 (000) 265 458</p>
                </div>
              </div>
              <h1 className="text-tertiary text-xl font-extrabold font-mincho mt-6">
                Follow us on social media
              </h1>
              <p className="text-custom3 mt-2">
                Veniam quae. Nostrum facere repellendus minus quod <br />
                aut aliquam neque reiciendis.
              </p>
              <div className="flex flex-row gap-2 text-tertiary mt-4">
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
            {/* button */}

            <div className="md:w-[469px] md:h-[519px]  w-full h-[510px] border-2  mt-12 bg-white">
              <form className="max-w-sm mx-auto px-4 md:mt-16">
                <div className="mb-5 mt-2">
                  <label
                    htmlFor="FullName"
                    className="block mb-2 text-sm font-medium text-white dark:text-white"
                  ></label>
                  <input
                    type="name"
                    id="name"
                    className=" bg-[#F5F5F5]  text-sm block md:w-[359px] w-full p-2.5   font-work text-md dark:border-white dark:placeholder-tertiary dark:text-tertiary  "
                    placeholder="Enter Your Name*"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  ></label>
                  <input
                    type="email"
                    id="email"
                    className=" bg-[#F5F5F5]   text-sm block md:w-[359px] w-full p-2.5   font-work text-md dark:border-tertiary  dark:placeholder-tertiary dark:text-tertiary "
                    placeholder="Email Adress*"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="number"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  ></label>
                  <input
                    type=""
                    id=""
                    className=" bg-[#F5F5F5]   text-sm block md:w-[359px] w-full  p-2.5   font-work text-md dark:border-white dark:placeholder-tertiary dark:text-tertiary "
                    placeholder="Phone Number*"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor=""
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  ></label>
                  <input
                    type="Address"
                    id=""
                    className=" bg-[#F5F5F5]   text-sm block md:w-[359px] w-full  p-2.5   font-work text-md dark:border-white dark:placeholder-tertiary dark:text-white  "
                    placeholder="Address*"
                    required
                  />
                </div>

                <div className="mb-5">
                  <label
                    htmlFor=""
                    className=" text-sm font-medium text-white dark:text-tertiary"
                  ></label>
                  <input
                    type=""
                    id=""
                    className=" bg-[#F5F5F5]   text-sm block md:w-[359px] w-full  h-[90px] p-2.5 bg-transparent  font-work text-md  dark:placeholder-tertiary dark:text-tertiary  "
                    placeholder="About Occupation"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="text-white bg-tertiary hover:bg-blue-800 focus:ring-4 focus:outline-none  font-medium  text-sm w-full sm:w-[201px] px-5 py-2.5 text-center dark:bg-tertiary dark:hover:bg-primary rounded-full md:mt-4"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
