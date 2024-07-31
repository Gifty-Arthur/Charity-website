// eslint-disable-next-line no-unused-vars
import React from "react";

//images
import eb1 from "../../assets/Images/Events/eb1.png";
import e1 from "../../assets/Images/Events/e1.png";
import e2 from "../../assets/Images/Events/e2.png";
import e3 from "../../assets/Images/Events/e3.png";
import e4 from "../../assets/Images/Events/e4.png";
import e5 from "../../assets/Images/Events/e4.png";
import e6 from "../../assets/Images/Events/e4.png";
const Event = () => {
  return (
    <div>
      <div className="relative">
        <img src={eb1} alt="" />
        <div className="absolute inset-0 flex container">
          <div className="flex flex-col md:mt-48 mt-8">
            <p className="text-white md:text-5xl text-lg  font-sue mt-2">
              Donation
            </p>
            <h1 className="text-white font-mincho font-extrabold md:text-6xl mt-2">
              Our Events
            </h1>
          </div>
        </div>
      </div>

      <div className="container mt-20 ">
        <div className="md:flex flex-row gap-10">
          <div className="flex flex-col">
            <img src={e1} alt="" />
            <p className="font-work text-custom3 mt-2 border-b-2 border-[#C7C7C7] py-4">
              Organized By<span className="text-tertiary">Nattasha </span>
            </p>
            <h1 className="text-primary text-xl font-extrabold font-minchos mt-2">
              Education for Poor Children
            </h1>
            <p className="text-custom3 font-work mt-2">
              There are many varieations of passages of injected
              <br /> Lorem Ipsum available,but the majority have.
            </p>
          </div>
          {/* 2nd */}
          <div className="flex flex-col">
            <img src={e2} alt="" className="md:mt-0 mt-8" />
            <p className="font-work text-custom3 mt-2 border-b-2 border-[#C7C7C7] py-4">
              Organized By<span className="text-tertiary">Nattasha </span>
            </p>
            <h1 className="text-tertiary text-xl font-extrabold font-minchos mt-2">
              Healthy Food for Growing
            </h1>
            <p className="text-custom3 font-work mt-2">
              There are many varieations of passages of injected
              <br /> Lorem Ipsum available,but the majority have.
            </p>
          </div>
        </div>

        {/* 3rd */}
        <div className="md:flex flex-row gap-10 mt-10">
          <div className="flex flex-col">
            <img src={e3} alt="" className="md:mt-0 mt-8" />
            <p className="font-work text-custom3 mt-2 border-b-2 border-[#C7C7C7] py-4">
              Organized By<span className="text-tertiary">Nattasha </span>
            </p>
            <h1 className="text-tertiary text-xl font-extrabold font-minchos mt-2">
              Cloth Comming
            </h1>
            <p className="text-custom3 font-work mt-2">
              There are many varieations of passages of injected
              <br /> Lorem Ipsum available,but the majority have.
            </p>
          </div>
          {/* 2nd */}
          <div className="flex flex-col">
            <img src={e4} alt="" className="md:mt-0 mt-8" />
            <p className="font-work text-custom3 mt-2 border-b-2 border-[#C7C7C7] py-4">
              Organized By<span className="text-tertiary">Nattasha </span>
            </p>
            <h1 className="text-tertiary text-xl font-extrabold font-minchos mt-2">
              Love to Help Awarness Event
            </h1>
            <p className="text-custom3 font-work mt-2">
              There are many varieations of passages of injected
              <br /> Lorem Ipsum available,but the majority have.
            </p>
          </div>
        </div>

        {/* 4th */}
        <div className="md:flex flex-row gap-10 mt-10">
          <div className="flex flex-col">
            <img src={e5} alt="" className="md:mt-0 mt-8" />
            <p className="font-work text-custom3 mt-2 border-b-2 border-[#C7C7C7] py-4">
              Organized By<span className="text-tertiary">Nattasha </span>
            </p>
            <h1 className="text-tertiary text-xl font-extrabold font-minchos mt-2">
              Raise Your Hands Against Cancer
            </h1>
            <p className="text-custom3 font-work mt-2">
              There are many varieations of passages of injected
              <br /> Lorem Ipsum available,but the majority have.
            </p>
          </div>
          {/* 2nd */}
          <div className="flex flex-col">
            <img src={e6} alt="" className="md:mt-0 mt-8" />
            <p className="font-work text-custom3 mt-2 border-b-2 border-[#C7C7C7] py-4">
              Organized By<span className="text-tertiary">Nattasha </span>
            </p>
            <h1 className="text-tertiary text-xl font-extrabold font-minchos mt-2">
              Compaign: Fund Raising for Water
            </h1>
            <p className="text-custom3 font-work mt-2">
              There are many varieations of passages of injected
              <br /> Lorem Ipsum available,but the majority have.
            </p>
          </div>
        </div>
        <div className="mb-20"></div>
      </div>
    </div>
  );
};

export default Event;
