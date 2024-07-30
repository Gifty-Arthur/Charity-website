import React from "react";
//images
import vt1 from "../../assets/Images/About/vt1.png";

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
    </div>
  );
};

export default Volunteer;
