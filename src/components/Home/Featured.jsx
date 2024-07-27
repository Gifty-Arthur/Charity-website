import React from "react";
import p1 from "../../assets/Images/Projects/p1.png";
import p2 from "../../assets/Images/Projects/p2.png";
const Featured = () => {
  return (
    <div>
      <div className="container">
        <div className="mt-16">
          <div className="md:flex items-center justify-center">
            <div className="md:w-[490px] md:h-[221px] w-full bg-tertiary ">
              <p className="font-sue text-primary md:text-[35px] ">
                What we did
              </p>
              <h1 className="font-mincho text-white font-extrabold md:text-4xl text-md mt-1">
                Featured Projects
              </h1>
              <p className="text-white text-sm md:mt-2 mt-6 font-work ">
                Lorem Ipsum is simply dummy text of the printin typesetting
                dummy text ever when an unknown printer took a galley of type
                and scrambled a type specimen book.
              </p>
              <a href="" target="_blank" rel="noopener noreferrer">
                <button className=" w-[115px] h-[45px] text-white bg-primary md:text-md text-sm rounded-sm  hover:bg-gray-500 hover:text-white md:mt-8 mt-8 ">
                  DONATE NOW
                </button>
              </a>
            </div>
            <img src={p1} alt="" className="w-[240px] h-[221px]" />
            <img src={p2} alt="" className="w-[240px] h-[221px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
