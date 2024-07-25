// Home.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import back from "../../assets/Images/Home/back.png";
// import hbg2 from "../../assets/Images/Home/hbg2.png";
// import hbg3 from "../../assets/Images/Home/hbg3.png";
import Education from "./Education";

function Home() {
  return (
    <div className="relative">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        history={{
          key: "slide",
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            <img src={back} alt="Slide 1" />
            <div className="absolute inset-0 flex container">
              <div className="flex flex-col md:mt-40 mt-8">
                <p className="text-white md:text-5xl text-lg  font-sue mt-2">
                  Need Help...
                </p>
                <h1 className="text-white font-mincho font-extrabold md:text-6xl mt-2">
                  Being Life Saver
                  <br />
                  For Someone
                </h1>
                <div className=" justify-between sm:flex hidden mt-2 ">
                  <div className="relative bg-white rounded-full md:w-6 md:h-6 w-4 h-4 mt-1">
                    <div>
                      <hr className="absolute top-1/2 left-6 -translate-y-1/2 border-t-2 border-gray-300 md:w-[248px] w-[100px]" />
                    </div>
                  </div>
                  <div className="md:w-[219px] md:h-[33px]  flex items-center justify-center font-work md:text-md text-sm font-medium text-white rounded-full border-2 border-white">
                    BELOW POVERTY LINE
                  </div>
                </div>

                <div className="flex flex-row md:gap-4 mt-4  gap-2">
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <button className=" md:w-[115px] w-[85px] md:h-[45px] h-[25px] bg-primary rounded-sm text-white hover:bg-custom3 shadow-md ">
                      DONATE
                    </button>
                  </a>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <button className=" md:w-[115px] w-[85px] md:h-[45px] h-[25px] bg-white md:text-md text-sm rounded-sm text-tertiary hover:bg-primary hover:text-white ">
                      DISCOVER
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src={hbg2} alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hbg3} alt="Slide 3" />
        </SwiperSlide> */}
      </Swiper>

      <Education />
    </div>
  );
}

export default Home;
