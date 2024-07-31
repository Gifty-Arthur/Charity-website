/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";
//images
import vt1 from "../../assets/Images/About/vt1.png";
import vt2 from "../../assets/Images/About/vt2.png";
import vt4 from "../../assets/Images/About/vt4.png";

const Volunteer = () => {
  return (
    <div>
      <div className="relative">
        <img src={vt1} alt="Slide 1" />
        <div className="absolute inset-0 flex container">
          <div className="flex flex-col md:mt-40 mt-8">
            <p className="text-white md:text-5xl text-lg  font-sue mt-2">
              Need Your Heartful Help...
            </p>
            <h1 className="text-white font-mincho font-extrabold md:text-6xl mt-2">
              Become a Volunteer
            </h1>
          </div>
        </div>
      </div>
      {/* together */}
      <div className="container">
        <div className="md:flex flex-row gap-16 mt">
          <div className="flex flex-col md:mt-20 mt-10">
            <p className="font-sue text-primary text-[35px]  p-4">Help First</p>
            <h1 className="font-mincho font-extrabold text-4xl text-tertiary text-md">
              Let's help together
            </h1>
            <p className="font-work text-custom3 mt-4">
              Lorem Ipsum is simply dummy text of the printin typesetting dummy
              text ever when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.{" "}
            </p>
            <p className="font-work text-custom3 mt-6">
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining when an unknown printer took a
              galley of type and scrambled it to make a type specimen book.
              essentially.
            </p>
            <a href="" target="_blank" rel="noopener noreferrer">
              <button className=" w-[215px] h-[35px] bg-tertiary rounded-full text-white hover:bg-custom3 mt-8">
                Call : +000 365 698
              </button>
            </a>
          </div>
          {/* 2nd */}
          <img src={vt2} alt="" className="mt-20" />
        </div>
        {/* impact */}
        <div className="md:flex flex-row gap-16  ">
          <img src={vt4} alt="" className="mt-20" />
          <div className="flex flex-col md:mt-20 mt-10">
            <h1 className="font-mincho font-extrabold text-4xl text-tertiary text-md">
              More People More impact
            </h1>
            <p className="font-work text-custom3 mt-4">
              Lorem Ipsum is simply dummy text of the printin typesetting dummy
              text ever when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.{" "}
            </p>
            <p className="font-work text-custom3 mt-6">
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining when an unknown printer took a
              galley of type and scrambled it to make a type specimen book.
              essentially.
            </p>
          </div>
        </div>
      </div>

      {/*  heartful*/}
      <div className="bg-[#f1eeec] mt-20">
        <div className="container">
          <div className="md:flex flex-row gap-16">
            <div className="flex flex-col">
              <p className="font-sue text-primary text-[35px]  p-4">
                Help The People With us
              </p>
              <h1 className="font-mincho font-extrabold text-4xl text-tertiary text-md">
                Need Your Heartful Help
              </h1>
              <p className="font-work text-custom3 mt-4">
                Lorem Ipsum is simply dummy text of the printin typesetting
                dummy text ever when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.{" "}
              </p>
              <p className="font-work text-custom3 mt-6">
                Bring to the table win-win survival strategies to proactive
                domination. is on the runway heading towards a streamlined cloud
                solution. User gener eal-time will have multiple touch points
                for offshoring
              </p>
              <div className="flex flex-row gap-4 mt-8">
                <div className="w-[64px] h-[64px] bg-primary flex items-center font-extrabold text-xl font-mincho text-white justify-center rounded-full">
                  01
                </div>
                <div className="flex flex-col">
                  <h1 className="text-xl text-tertiary font-mincho">
                    Create a personal profile
                  </h1>
                  <p className="text-custom3 font-work">
                    Veniam quae. Nostrum facere repellendus minus
                    <br /> quod aut neque reiciendis.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-4 mt-8">
                <div className="w-[64px] h-[64px] bg-primary flex items-center font-extrabold text-xl font-mincho text-white justify-center rounded-full">
                  02
                </div>
                <div className="flex flex-col">
                  <h1 className="text-xl text-tertiary font-mincho">
                    Add your organization
                  </h1>
                  <p className="text-custom3 font-work">
                    Veniam quae. Nostrum facere repellendus minus
                    <br /> quod aut neque reiciendis.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-4 mt-8">
                <div className="w-[64px] h-[64px] bg-primary flex items-center font-extrabold text-xl font-mincho text-white justify-center rounded-full">
                  03
                </div>
                <div className="flex flex-col">
                  <h1 className="text-xl text-tertiary font-mincho">
                    Add volunteer opportunities
                  </h1>
                  <p className="text-custom3 font-work">
                    Veniam quae. Nostrum facere repellendus minus
                    <br /> quod aut neque reiciendis.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-4 mt-8">
                <div className="w-[64px] h-[64px] bg-primary flex items-center font-extrabold text-xl font-mincho text-white justify-center rounded-full">
                  04
                </div>
                <div className="flex flex-col">
                  <h1 className="text-xl text-tertiary font-mincho">
                    You are ready to recruit!
                  </h1>
                  <p className="text-custom3 font-work">
                    Veniam quae. Nostrum facere repellendus minus
                    <br /> quod aut neque reiciendis.
                  </p>
                </div>
              </div>
              {/*  button */}
              <a href="" target="_blank" rel="noopener noreferrer">
                <button className=" w-[200px] h-[65px] bg-white rounded-full text-tertiary hover:bg-custom3 mt-8">
                  GET STARTED
                </button>
              </a>
            </div>
            {/* button */}
            <div className="md:w-[569px] md:h-[629px]  w-full h-[510px] border-2 md:mt-12 mt-12 bg-white">
              <form className="max-w-sm mx-auto px-4 md:mt-16">
                <h1 className="text-tertiary font-mincho text-xl mt-4 font-extrabold">
                  Complete the Form
                </h1>
                <p className="text-primary font-work mt-2">
                  Fill Form and Beacame Volonteer
                </p>
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
                    className=" text-sm font-medium text-white dark:text-white"
                  ></label>
                  <input
                    type=""
                    id=""
                    className=" bg-[#F5F5F5] text-sm block md:w-[359px] w-full  h-[90px] p-2.5 bg-transparent  font-work text-md dark:border-white dark:placeholder-tertiary dark:text-tertiary  "
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

      <div className="md:mb-0 mb-4"></div>
    </div>
  );
};

export default Volunteer;
