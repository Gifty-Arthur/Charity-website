/* eslint-disable react/prop-types */
import CountUp from "react-countup";
import React, { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";

///images
import b1 from "../../assets/Images/Brand/b1.png";
import b2 from "../../assets/Images/Brand/b2.png";
import b3 from "../../assets/Images/Brand/b3.png";
import b4 from "../../assets/Images/Brand/b4.png";
import b5 from "../../assets/Images/Brand/b5.png";

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
          <div className="md:flex items-center justify-between md:ml-0 ml-20">
            <img src={b1} alt="" className="md:mt-0 mt-10 " />
            <img src={b2} alt="" className="md:mt-0 mt-10 " />
            <img src={b3} alt="" className="md:mt-0 mt-10 " />
            <img src={b4} alt="" className="md:mt-0 mt-10 " />
            <img src={b3} alt="" className="md:mt-0 mt-10 " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CounterPage;
