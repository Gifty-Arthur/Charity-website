// eslint-disable-next-line no-unused-vars
import React from "react";
import p1 from "../../assets/Images/Projects/p1.png";
import p2 from "../../assets/Images/Projects/p2.png";
import t1 from "../../assets/Images/Projects/t1.png";
import as from "../../assets/Images/Projects/as.png";
import t2 from "../../assets/Images/Projects/t2.png";

import Numbers from "./Numbers";

const Featured = () => {
  return (
    <div>
      <div className="container">
        <div className="mt-16">
          <div>
            <div className="md:flex flex-row ">
              <div className="md:w-[741px] md:h-[221px] w-full bg-tertiary ">
                <p className="font-sue text-primary md:text-[35px] mt-2 ml-6 ">
                  What we did
                </p>
                <h1 className="font-mincho text-white font-extrabold md:text-4xl text-md mt-1 ml-6">
                  Featured Projects
                </h1>
                <p className="text-white text-sm md:mt-2 mt-6 font-work ml-6 ">
                  Lorem Ipsum is simply dummy text of the printin typesetting
                  dummy text ever when an unknown printer took a galley of type
                  and scrambled a type specimen book.
                </p>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <button className=" w-[100px] h-[35px] text-white bg-primary md:text-md text-sm rounded-sm ml-6 hover:bg-gray-500 hover:text-white mt-1  ">
                    DONATE NOW
                  </button>
                </a>
              </div>
              <div className="flex flex-row md:mt-0 mt-4">
                <img
                  src={p1}
                  alt=""
                  className="md:w-[480px] md:h-[221px] w-full h-[110px]"
                />
                <img
                  src={p2}
                  alt=""
                  className="md:w-[480px] md:h-[221px] w-full h-[110px]"
                />
              </div>
            </div>
            {/* 2nd image */}
          </div>
        </div>

        {/* testimonials */}
        <div className="md:mt-20 mt-10">
          <div className="text-center">
            <p className="font-sue text-primary md:text-[35px] ">Testimonial</p>
            <h1 className="font-mincho font-extrabold md:text-4xl text-md">
              What People Say About Us
            </h1>
          </div>
          <div className="md:mt-16 mt-8">
            <div className="md:flex items-center justify-between ">
              <div className="md:w-[550px] md:h-[307px] bg-custom1 w-full h-full">
                <div className="flex flex-row md:gap-6 gap-4 md:p-8">
                  <img src={t1} alt="" className="" />
                  <div className="flex flex-col mt-8">
                    <div className="flex items-center justify-between">
                      <p className="text-tertiary md:text-xl text-md font-mincho font-bold">
                        Belli Smith
                      </p>
                      <img
                        src={as}
                        alt=""
                        className="md:w-[77px] md:h-[57px] w-[36px] h-[26px] md:mt-0 mt-2"
                      />
                    </div>
                    <p className="font-work text-custom3 text-md md:-mt-4">
                      Designer
                    </p>
                    <p className="font-work text-custom3 text-sm md:text-md mt-4">
                      Centuries but also the leap into electronic
                      typesetting,established fact that a reader will
                      bdistracted the readable content.
                    </p>
                  </div>
                </div>
              </div>
              {/* 2nd test */}
              <div className="md:w-[550px] md:h-[307px] bg-custom1 w-full h-full md:mt-0 mt-4">
                <div className="flex flex-row md:gap-6 gap-4 md:p-8">
                  <img src={t2} alt="" className="" />
                  <div className="flex flex-col mt-8">
                    <div className="flex items-center justify-between">
                      <p className="text-tertiary md:text-xl text-md font-mincho font-bold">
                        Sara Taylor
                      </p>

                      <img
                        src={as}
                        alt=""
                        className="md:w-[77px] md:h-[57px] w-[36px] h-[26px] md:mt-0 mt-2"
                      />
                    </div>
                    <p className="font-work text-custom3 text-md md:-mt-4">
                      Donator
                    </p>
                    <p className="font-work text-custom3 text-sm md:text-md mt-4">
                      Centuries but also the leap into electronic
                      typesetting,established fact that a reader will
                      bdistracted the readable content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Numbers />
    </div>
  );
};

export default Featured;
