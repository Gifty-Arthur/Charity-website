import React from "react";
import p1 from "../../assets/Images/Projects/p1.png";
import p2 from "../../assets/Images/Projects/p2.png";
import p3 from "../../assets/Images/Projects/p3.png";
import p5 from "../../assets/Images/Projects/p5.png";
import p6 from "../../assets/Images/Projects/p6.png";
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
                  className="md:w-[480px] md:h-[221px] w-[120px] h-[110px]"
                />
                <img
                  src={p2}
                  alt=""
                  className="md:w-[480px] md:h-[221px] w-[120px] h-[110px]"
                />
              </div>
            </div>
            {/* 2nd image */}
            <div className="md:flex">
              <img
                src={p3}
                alt=""
                className="md:w-[240px] md:h-[221px] w-[120px] h-[110px]"
              />
              <img
                src={p5}
                alt=""
                className="md:w-[240px] md:h-[221px] w-[120px] h-[110px]"
              />

              {/*  */}
              <div className="md:w-[310px] md:h-[223px] bg-primary ">
                <div className="flex flex-row gap-4 p-4">
                  <div className="w-[97px] h-[27px]  rounded-full  bg-[#E85353] mt-14">
                    <p className="text-white text-sm text-center">Education</p>
                  </div>
                  <div className="w-[97px] h-[27px]  rounded-full  bg-[#E85353] mt-14">
                    <p className="text-white text-sm text-center">Education</p>
                  </div>
                </div>
                <h1 className="text-2xl   ml-4 text-white font-mincho">
                  More than One <br />
                  Life Changed{" "}
                </h1>
              </div>
              <img
                src={p6}
                alt=""
                className="md:w-[312px] md:h-[221px] w-[120px] h-[110px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
