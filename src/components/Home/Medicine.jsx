// eslint-disable-next-line no-unused-vars
import React from "react";

import Featured from "./Featured";

import icon2 from "../../assets/Images/Education/icon2.png";
import icon3 from "../../assets/Images/Education/icon3.png";
import icon4 from "../../assets/Images/Education/icon4.png";
import icon5 from "../../assets/Images/Education/icon5.png";
import icon6 from "../../assets/Images/Education/icon6.png";
import icon from "../../assets/Images/little/icon.png";
function Medicine() {
  return (
    <div>
      <div className="container">
        <div className="text-center mt-10">
          <p className="font-sue text-primary md:text-[35px] ">What we do</p>
          <h1 className="font-mincho font-extrabold md:text-4xl text-md">
            We do it for People in Need
          </h1>
        </div>
        {/* icons */}
        <div className="mt-10">
          <div className="flex flex-col md:gap-10 ">
            <div className="md:flex items-center justify-between">
              <div className="md:w-[260px] md:h-[200px] w-full ">
                <div className=" flex-col flex items-center justify-center">
                  <img src={icon} alt="" />
                  <h3 className="font-extrabold font-mincho text-[25px] text-tertiary">
                    Medicine Help
                  </h3>
                  <p className="text-[#727272] text-md font-work mt-2">
                    Centuries but also the leap into <br />
                    electronic typesetting, remaining
                    <br />
                    <span className="ml-10"> specimen book.</span>
                  </p>
                </div>
              </div>
              <div className="md:w-[260px] md:h-[200px] w-full md:mt-0 mt-4">
                <div className=" flex-col flex items-center justify-center">
                  <img src={icon2} alt="" />
                  <h3 className="font-extrabold font-mincho md:text-[25px] text-tertiary">
                    Water Delivery
                  </h3>
                  <p className="text-[#727272] md:text-md font-work mt-2 text-sm">
                    Centuries but also the leap into <br />
                    electronic typesetting, remaining
                    <br />
                    <span className="ml-10"> specimen book.</span>
                  </p>
                </div>
              </div>
              {/* 3rd */}
              <div className="md:w-[260px] md:h-[200px] w-full md:mt-0 mt-10 ">
                <div className=" flex-col flex items-center justify-center">
                  <img src={icon3} alt="" />
                  <h3 className="font-extrabold font-mincho text-[25px] text-tertiary">
                    We Care About
                  </h3>
                  <p className="text-[#727272] text-md font-work mt-2">
                    Centuries but also the leap into <br />
                    electronic typesetting, remaining
                    <br />
                    <span className="ml-10"> specimen book.</span>
                  </p>
                </div>
              </div>
            </div>
            {/* 4th */}
            <div className="md:flex items-center justify-between">
              <div className="md:w-[260px] md:h-[200px] w-full md:mt-0 mt-10 ">
                <div className=" flex-col flex items-center justify-center">
                  <img src={icon4} alt="" />
                  <h3 className="font-extrabold font-mincho text-[25px] text-tertiary">
                    Food Delivery
                  </h3>
                  <p className="text-[#727272] text-md font-work mt-2">
                    Centuries but also the leap into <br />
                    electronic typesetting, remaining
                    <br />
                    <span className="ml-10"> specimen book.</span>
                  </p>
                </div>
              </div>
              {/* 5th */}
              <div className="md:w-[260px] md:h-[200px] w-full md:mt-0 mt-10 ">
                <div className=" flex-col flex items-center justify-center">
                  <img src={icon5} alt="" />
                  <h3 className="font-extrabold font-mincho text-[25px] text-tertiary">
                    Spread The World
                  </h3>
                  <p className="text-[#727272] text-md font-work mt-2">
                    Centuries but also the leap into <br />
                    electronic typesetting, remaining
                    <br />
                    <span className="ml-10"> specimen book.</span>
                  </p>
                </div>
              </div>
              {/*  6th*/}
              <div className="md:w-[260px] md:h-[200px] w-full md:mt-0 mt-10 ">
                <div className=" flex-col flex items-center justify-center">
                  <img src={icon6} alt="" />
                  <h3 className="font-extrabold font-mincho text-[25px] text-tertiary">
                    Learn Education
                  </h3>
                  <p className="text-[#727272] text-md font-work mt-2">
                    Centuries but also the leap into <br />
                    electronic typesetting, remaining
                    <br />
                    <span className="ml-10"> specimen book.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Featured />
    </div>
  );
}

export default Medicine;
