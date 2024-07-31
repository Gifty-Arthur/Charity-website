// eslint-disable-next-line no-unused-vars
import React from "react";

import pt1 from "../../assets/Images/About/pt1.png";
import pt2 from "../../assets/Images/About/pt2.png";
import pt3 from "../../assets/Images/About/pt3.png";
import pt4 from "../../assets/Images/About/pt4.png";
import pt5 from "../../assets/Images/About/pt5.png";
import pt6 from "../../assets/Images/About/pt6.png";
import pt7 from "../../assets/Images/About/pt7.png";
import pt8 from "../../assets/Images/About/pt8.png";
import pt9 from "../../assets/Images/About/pt9.png";
import pt10 from "../../assets/Images/About/pt10.png";

const Project = () => {
  return (
    <div>
      <div>
        <div className="relative">
          <img src={pt1} alt="" />
          <div className="absolute inset-0 flex container">
            <div className="flex flex-col md:mt-48 mt-8">
              <p className="text-white md:text-5xl text-lg  font-sue mt-2">
                Donation...
              </p>
              <h1 className="text-white font-mincho font-extrabold md:text-6xl mt-2">
                Meet Charity <br />
                Projects
              </h1>
            </div>
          </div>
        </div>
        <div className="container mt-20">
          <div className="md:flex flex-row gap-4">
            <img src={pt2} alt="" />
            <img src={pt3} alt="" />
            <img src={pt4} alt="" />
          </div>
          <div className="md:flex flex-row gap-4 mt-4">
            <img src={pt5} alt="" />
            <img src={pt6} alt="" />
            <img src={pt7} alt="" />
          </div>
          <div className="md:flex flex-row gap-4 mt-4">
            <img src={pt8} alt="" />
            <img src={pt9} alt="" />
            <img src={pt10} alt="" />
          </div>
        </div>
        <div className="mb-20"></div>
      </div>
    </div>
  );
};

export default Project;
