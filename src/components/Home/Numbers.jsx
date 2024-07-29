/* eslint-disable react/prop-types */
import CountUp from "react-countup";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";

//icons
import { MdFacebook } from "react-icons/md";
import { FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";

///images
import b1 from "../../assets/Images/Brand/b1.png";
import b2 from "../../assets/Images/Brand/b2.png";
import b3 from "../../assets/Images/Brand/b3.png";
import b4 from "../../assets/Images/Brand/b4.png";
import v1 from "../../assets/Images/Brand/v1.png";
import v2 from "../../assets/Images/Brand/v2.png";
import v3 from "../../assets/Images/Brand/v3.png";
import v4 from "../../assets/Images/Brand/v4.png";
import v5 from "../../assets/Images/Brand/v5.png";

const CounterPage = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <div>
      <Numbers counterOn={counterOn} setCounterOn={setCounterOn} />
    </div>
  );
};

function Numbers({ counterOn, setCounterOn }) {
  return (
    <div>
      <ScrollTrigger
        onEnter={() => {
          console.log("Entered the trigger zone");
          setCounterOn(true);
        }}
        onExit={() => {
          console.log("Exited the trigger zone");
          setCounterOn(false);
        }}
      >
        <div className="container mt-20">
          <div>
            <div className="md:flex items-center justify-center gap-8 ">
              <div className="flex flex-row gap-10">
                <div className="w-[189px] h-[134px]  ">
                  <h1 className="text-[56px] text-tertiary font-extrabold font-mincho text-center">
                    {counterOn && (
                      <CountUp
                        start={0}
                        end={200}
                        duration={3}
                        delay={0}
                        suffix="K"
                      />
                    )}
                  </h1>
                  <p className="text-center">
                    Received Donations From Our People
                  </p>
                </div>
                {/* 2nd */}
                <div className="w-[189px] h-[134px] ">
                  <h1 className="text-[56px] text-tertiary font-extrabold font-mincho text-center">
                    {counterOn && (
                      <CountUp
                        start={0}
                        end={99}
                        duration={3}
                        delay={0}
                        suffix="K"
                      />
                    )}
                  </h1>
                  <p className="text-center">
                    Projects Done With The Help Of Donators
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-8">
                <div className="w-[189px] h-[134px]  md:mt-0 mt-4 ">
                  <h1 className="text-[56px] text-tertiary font-extrabold font-mincho text-center">
                    {counterOn && (
                      <CountUp
                        start={0}
                        end={405}
                        duration={3}
                        delay={0}
                        suffix="K"
                      />
                    )}
                  </h1>
                  <p className="text-center">People We Helped on 2020</p>
                </div>
                <div className="w-[189px] h-[134px] md:mt-0 mt-4">
                  <h1 className="text-[56px] text-tertiary font-extrabold font-mincho text-center">
                    {counterOn && (
                      <CountUp
                        start={0}
                        end={10.7}
                        duration={3}
                        delay={0}
                        suffix="K"
                      />
                    )}
                  </h1>
                  <p className="text-center">
                    With Our Volunteers We’ve Solved Many Causes
                  </p>
                </div>
              </div>
            </div>
            {/* 3rd */}
          </div>
        </div>
      </ScrollTrigger>

      {/* brand */}
      <div className=" ">
        <div className="container mt-20 ">
          <div className="md:flex items-center justify-between md:ml-0 ml-28">
            <img src={b1} alt="" className="md:mt-0 mt-10 " />
            <img src={b2} alt="" className="md:mt-0 mt-10 " />
            <img src={b3} alt="" className="md:mt-0 mt-10 " />
            <img src={b4} alt="" className="md:mt-0 mt-10 " />
            <img src={b3} alt="" className="md:mt-0 mt-10 " />
          </div>
        </div>
      </div>

      {/* voluteer team */}
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
                <a href="" target="_blank" rel="noopener noreferrer">
                  <button className=" w-[190px]  h-[45px]  bg-tertiary rounded-full text-white hover:bg-custom3 shadow-md  mt-10">
                    JOIN US TODAY
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* events */}
      <div className="container mt-20">
        <div className="flex flex-col ">
          <p className="font-sue text-primary text-[35px] ">Our Events</p>
          <h1 className="font-mincho font-extrabold text-4xl text-tertiary text-md">
            Join Upcoming Events
            <br />
            Replays & Webinars
          </h1>
        </div>
        <div className="md:flex flex-row gap-6">
          <div className="flex flex-col mt-10 ">
            <img src={v5} alt="" />
            <div className="md:flex flex-row gap-4">
              <p>Organized By : Nattasha </p>
              <div className="flex flex-row md:gap-2 ">
                <MdAccessTime className="text-primary mt-1" />
                <p> 10:00 AM - 18:00 PM, Everyday</p>
              </div>
            </div>
            <h1 className="text-tertiary font-mincho font-extrabold text-xl mt-2">
              Education for Poor Children
            </h1>
            <p className="text-md text-tertiary font-sans">
              There are many varieations of passages of injected Lorem Ipsum
              available,but the majority have.
            </p>
            <div className="w-[334px] h-[39px] bg-gray-200 mt-2 rounded-md flex items-center justify-center">
              <div className="flex flex-row gap-2">
                <FaLocationDot className="text-primary mt-1" />
                <p>Dark Spurt, San Francisco, CA 94528</p>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="flex flex-col gap-4 mt-10">
            <div className="flex flex-row gap-4 border-b-2 border-primary pb-2">
              <div className="bg-tertiary w-[116px] h-[110px]">
                <p className="text-white font-mincho text-3xl text-center mt-4">
                  21 August
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-md text-custom3 font-sans">
                  Organized By :
                  <span className="text-primary mt-2"> Nattasha </span>
                </p>
                <h1 className="text-tertiary font-mincho font-extrabold text-xl">
                  Healthy Food for Growing
                </h1>
                <p className="text-custom3 font-sans text-md mt-2">
                  There are many varieations of passages of injected Lorem Ipsum
                  available.
                </p>
              </div>
            </div>

            {/* 3rd */}
            <div className="flex flex-row gap-4 border-b-2 border-primary pb-2">
              <div className="bg-tertiary w-[116px] h-[110px]">
                <p className="text-white font-mincho text-3xl text-center mt-4">
                  18 March
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-md text-custom3 font-sans">
                  Organized By :
                  <span className="text-primary mt-2"> Michel Sudan </span>
                </p>
                <h1 className="text-tertiary font-mincho font-extrabold text-xl">
                  Cloth Comming
                </h1>
                <p className="text-custom3 font-sans text-md mt-2">
                  There are many varieations of passages of injected Lorem Ipsum
                  available.
                </p>
              </div>
            </div>
            {/* 4th */}
            <div className="flex flex-row gap-4 border-b-2 border-primary pb-2">
              <div className="bg-tertiary w-[116px] h-[110px]">
                <p className="text-white font-mincho text-3xl text-center mt-4">
                  14 March
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-md text-custom3 font-sans">
                  Organized By :
                  <span className="text-primary mt-2"> Jogn Doue </span>
                </p>
                <h1 className="text-tertiary font-mincho font-extrabold text-xl">
                  Teachers Presentation
                </h1>
                <p className="text-custom3 font-sans text-md mt-2">
                  There are many varieations of passages of injected Lorem Ipsum
                  available.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* events */}
      </div>

      {/* News Letter */}
      <div className="md:flex md:mt-20 mt-10">
        <div className="w-full h-[398px] bg-primary">
          <div className="container mt-10">
            <p className="font-sue text-white text-[35px]  p-4">Subscribe</p>

            <h1 className="font-mincho font-extrabold text-4xl text-white text-md">
              NewsLetter
            </h1>
            <p className="text-white text-md font-sans mt-2">
              Sign up for our monthly newsletter to get the latest news,
              volunteer opportunities,
            </p>
            {/* button */}
            <section className="bg">
              <div className="py-8 lg:py-8 ">
                <form action="#" className="space-y-8">
                  <div className="md:flex flex-row gap-4">
                    <div className="mb-5">
                      <label
                        htmlFor="email"
                        className="block  mb-2 text-sm font-mediumc dark:text-custom3"
                      ></label>
                      <input
                        type="email"
                        id="email"
                        className="text-black  rounded-full  text-sm block md:w-[359px] w-full p-2.5 bg-white  font-work text-md  dark:placeholder-custom3 dark:text-custom3  "
                        placeholder="Enter Your Email Address"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="text-white bg-tertiary hover:bg-blue-800 w-[102px] h-[39px] focus:ring-4 focus:outline-none  font-medium  text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-tertiary dark:hover:bg-custom3 rounded-full md:mt-2"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </div>
        <div className="w-full h-[398px] bg-secondary">
          <div className="container mt-10">
            <p className="font-sue text-tertiary text-[35px]  p-4">
              Recent Blog
            </p>
            <h1 className="font-mincho font-extrabold text-4xl text-tertiary text-md">
              Take Look At Recent Blog Posts
            </h1>
            <a href="" target="_blank" rel="noopener noreferrer">
              <button className=" w-[129px] h-[45px]  bg-tertiary md:text-md text-sm rounded-full text-white hover:bg-primary hover:text-white md:mt-12 mt-8   ">
                SEE OUR BLOGS
              </button>
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CounterPage;
