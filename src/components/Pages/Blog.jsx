// eslint-disable-next-line no-unused-vars
import React from "react";
import b1 from "../../assets/Images/Events/b1.png";
import b2 from "../../assets/Images/Events/b2.png";
import b3 from "../../assets/Images/Events/b3.png";
import b4 from "../../assets/Images/Events/b4.png";
import b5 from "../../assets/Images/Events/b5.png";
import b6 from "../../assets/Images/Events/b6.png";

import { urls } from "../Helpers/routes";

const Blog = () => {
  return (
    <div>
      <div className="relative">
        <img src={b1} alt="" />
        <div className="absolute md:inset-20  inset-10 container">
          <div className="flex justify-items-end justify-end ">
            <div className="md:w-[563px] w-[210px] md:h-full sm:flex hidden p-10 bg-white ml-20">
              <p className="text-sm text-tertiary mt-2">
                MARCH 16,2021 : <span className="text-primary">Nattasha</span>
                <h1 className="text-tertiary font-extrabold font-mincho md:text-xl  mt-2">
                  Why Giving Is Important | Five Reasons to Donate
                </h1>
                <p className="text-custom3 font-work mt-2 ">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered.
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-20">
        <div className="md:flex">
          <img src={b2} alt="" className="w-[577px]" />
          <div className="md:w-[1100px] h-[464px] w-full bg-[#F5F5F5] py-14 p-8 ">
            <p className="font-medium text-tertiary ">
              AUGUST 18,2022 : <span>MINCIYA</span>
            </p>
            <h1 className="text-tertiary font-extrabold font-mincho text-xl mt-4">
              We’ve reached 1 million in donations and counting
            </h1>
            <p className="text-custom3 mt-2">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered altera in some form, by injected
              randomised words.
            </p>
            <a href={urls.found} target="_blank" rel="noopener noreferrer">
              <button className=" md:w-[135px] w-[95px] md:h-[45px] h-[25px] bg-tertiary rounded-full text-white hover:bg-custom3 shadow-md mt-8">
                READ MORE
              </button>
            </a>
          </div>
        </div>
        {/* 2nd */}
        <div className="md:flex mt-10">
          <img src={b3} alt="" className="" />
          <div className="md:w-[1100px] w-full h-[464px] bg-[#F5F5F5] py-14 p-8 ">
            <p className="font-medium text-tertiary ">
              AUGUST 18,2022 : <span>MINCIYA</span>
            </p>
            <h1 className="text-tertiary font-extrabold font-mincho text-xl mt-4">
              why were going to alaska and why you should too
            </h1>
            <p className="text-custom3 mt-2">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered altera in some form, by injected
              randomised words.
            </p>
            <a href={urls.found} target="_blank" rel="noopener noreferrer">
              <button className=" md:w-[135px] w-[105px] md:h-[45px] h-[35px] bg-transparent  rounded-full text-tertiary hover:bg-custom3 shadow-md  border border-tertiary mt-8">
                READ MORE
              </button>
            </a>
          </div>
        </div>
        {/* 3rd */}
        <div className="md:flex mt-10">
          <img src={b4} alt="" className="" />
          <div className="md:w-[1100px] w-full h-[464px] bg-[#F5F5F5] py-14 p-8 ">
            <p className="font-medium text-tertiary ">
              AUGUST 18,2022 : <span>MINCIYA</span>
            </p>
            <h1 className="text-tertiary font-extrabold font-mincho text-xl mt-4">
              why were going to alaska and why you should too
            </h1>
            <p className="text-custom3 mt-2">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered altera in some form, by injected
              randomised words.
            </p>
            <a href={urls.found} target="_blank" rel="noopener noreferrer">
              <button className=" md:w-[135px] w-[105px] md:h-[45px] h-[35px] bg-transparent  rounded-full text-tertiary hover:bg-custom3 shadow-md  border border-tertiary mt-8">
                READ MORE
              </button>
            </a>
          </div>
        </div>
        {/* 4 */}
        <div className="md:flex mt-10">
          <img src={b5} alt="" className="" />
          <div className="md:w-[1100px] w-full h-[464px] bg-[#F5F5F5] py-14 p-8 ">
            <p className="font-medium text-tertiary ">
              AUGUST 18,2022 : <span>MINCIYA</span>
            </p>
            <h1 className="text-tertiary font-extrabold font-mincho text-xl mt-4">
              San Francisco is officially the first city to ban plastic bottles
            </h1>
            <p className="text-custom3 mt-2">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered altera in some form, by injected
              randomised words.
            </p>
            <a href={urls.found} target="_blank" rel="noopener noreferrer">
              <button className=" md:w-[135px] w-[105px] md:h-[45px] h-[35px] bg-transparent  rounded-full text-tertiary hover:bg-custom3 shadow-md  border border-tertiary mt-8">
                READ MORE
              </button>
            </a>
          </div>
        </div>
        {/* 5 */}
        <div className="md:flex mt-10">
          <img src={b6} alt="" className="" />
          <div className="md:w-[1100px] w-full h-[464px] bg-[#F5F5F5] py-14 p-8 ">
            <p className="font-medium text-tertiary ">
              AUGUST 18,2022 : <span>MINCIYA</span>
            </p>
            <h1 className="text-tertiary font-extrabold font-mincho text-xl mt-4">
              We’ve reached 1 million in donations and counting
            </h1>
            <p className="text-custom3 mt-2">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered altera in some form, by injected
              randomised words.
            </p>
            <a href={urls.found} target="_blank" rel="noopener noreferrer">
              <button className=" md:w-[135px] w-[105px] md:h-[45px] h-[35px] bg-transparent  rounded-full text-tertiary hover:bg-custom3 shadow-md  border border-tertiary mt-8">
                READ MORE
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="mb-20"></div>
    </div>
  );
};

export default Blog;
