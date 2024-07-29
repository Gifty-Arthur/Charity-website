import Community from "./Community";

/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
//images
import li1 from "../../assets/Images/little/li1.png";
import li2 from "../../assets/Images/little/li2.png";
import li3 from "../../assets/Images/little/li3.png";
import li4 from "../../assets/Images/little/li4.png";
import li5 from "../../assets/Images/little/li5.png";
import li6 from "../../assets/Images/little/li6.png";

const little = () => {
  return (
    <div>
      <div>
        <div className="w-full bg-[#f1eeec] md:h-[1000px]  h-[888px] md:mt-20 mt-10">
          <div className="container">
            <div className="flex items-center justify-between">
              <div className=" flex flex-col md:py-24 py-10">
                <p className="font-sue text-primary md:text-[35px] ">
                  Our Causes
                </p>
                <h1 className="font-mincho font-extrabold md:text-4xl text-md">
                  You can help lots of people by <br />
                  donating little
                </h1>
              </div>
              <a href="" target="_blank" rel="noopener noreferrer">
                <button className=" w-[115px] h-[45px]  bg-primary md:text-md text-sm rounded-sm text-white hover:bg-primary hover:text-white md:mt-14 mt-8 ">
                  MORzE CAUSES
                </button>
              </a>
            </div>
            {/*web */}
            <div className="sm:flex hidden">
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                cssMode={true}
                navigation={{
                  nextEl: ".swiper-button-next-custom",
                  prevEl: ".swiper-button-prev-custom",
                }}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Keyboard]}
                className="mySwiper"
              >
                <div className="">
                  {/* img1 */}
                  <SwiperSlide>
                    {" "}
                    <div className="md:w-[365px]  h-full bg-white w-full">
                      <div className="relative">
                        <img src={li1} alt="" />
                        <div className="absolute top-0 left-6 mt-8 text-primary bg-white w-[85px] h-[46px] text-2xl font-mincho font-extrabold flex items-center justify-center shadow-md">
                          75%
                        </div>{" "}
                      </div>
                      <div className="p-8">
                        <h1 className="font-mincho text-2xl font-extrabold text-tertiary">
                          Big charity: build school for poor children
                        </h1>
                        <div className="rounded-full h-1 w-full md:w-[300px] bg-[#C5CECC] mt-4 md:mt-6">
                          <div className="bg-primary h-1 md:w-[250px] w-[150px] rounded-full"></div>
                        </div>
                        <div className="flex items-center justify-between mt-3">
                          <p className="font-mincho font-extrabold text-md text-tertiary">
                            Raised - $5M
                          </p>
                          <p className="font-mincho font-extrabold text-md text-primary">
                            Goal-$10M
                          </p>
                        </div>
                        <a href="" target="_blank" rel="noopener noreferrer">
                          <button className=" w-[115px] h-[45px]  bg-tertiary md:text-md text-sm rounded-sm text-white hover:bg-primary hover:text-white mt-6  ">
                            DONATE
                          </button>
                        </a>{" "}
                      </div>
                    </div>
                  </SwiperSlide>
                  {/* img2 */}
                  <SwiperSlide>
                    <div className="md:w-[365px]  h-full bg-white w-full">
                      <div className="relative">
                        <img src={li2} alt="" />
                        <div className="absolute top-0 left-6 mt-8 text-primary bg-white w-[85px] h-[46px] text-2xl font-mincho font-extrabold flex items-center justify-center shadow-md">
                          85%
                        </div>{" "}
                      </div>
                      <div className="p-8">
                        <h1 className="font-mincho text-2xl font-extrabold text-tertiary">
                          Big charity: build school for poor children
                        </h1>
                        <div className="rounded-full h-1 w-full md:w-[300px] bg-[#C5CECC] mt-4 md:mt-6">
                          <div className="bg-primary h-1 md:w-[160px] w-[150px] rounded-full"></div>
                        </div>
                        <div className="flex items-center justify-between mt-3">
                          <p className="font-mincho font-extrabold text-md text-tertiary">
                            Raised - $5M
                          </p>
                          <p className="font-mincho font-extrabold text-md text-primary">
                            Goal-$10M
                          </p>
                        </div>
                        <a href="" target="_blank" rel="noopener noreferrer">
                          <button className=" w-[115px] h-[45px]  bg-tertiary md:text-md text-sm rounded-sm text-white hover:bg-primary hover:text-white mt-6  ">
                            DONATE
                          </button>
                        </a>{" "}
                      </div>
                    </div>
                  </SwiperSlide>
                  {/* img3 */}
                  <SwiperSlide>
                    {" "}
                    <div className="md:w-[365px]  h-full bg-white w-full">
                      <div className="relative">
                        <img src={li3} alt="" />
                        <div className="absolute top-0 left-6 mt-8 text-primary bg-white w-[85px] h-[46px] text-2xl font-mincho font-extrabold flex items-center justify-center shadow-md">
                          {" "}
                          50%
                        </div>{" "}
                      </div>
                      <div className="p-8">
                        <h1 className="font-mincho text-2xl font-extrabold text-tertiary">
                          Big charity: build school for poor children
                        </h1>
                        <div className="rounded-full h-1 w-full md:w-[300px] bg-[#C5CECC] mt-4 md:mt-6">
                          <div className="bg-primary h-1 md:w-[257px] w-[150px] rounded-full"></div>
                        </div>
                        <div className="flex items-center justify-between mt-3">
                          <p className="font-mincho font-extrabold text-md text-tertiary">
                            Raised - $5M
                          </p>
                          <p className="font-mincho font-extrabold text-md text-primary">
                            Goal-$10M
                          </p>
                        </div>
                        <a href="" target="_blank" rel="noopener noreferrer">
                          <button className=" w-[115px] h-[45px]  bg-tertiary md:text-md text-sm rounded-sm text-white hover:bg-primary hover:text-white mt-6  ">
                            DONATE
                          </button>
                        </a>{" "}
                      </div>
                    </div>
                  </SwiperSlide>
                  {/* img4 */}
                  <SwiperSlide>
                    {" "}
                    <div className="md:w-[365px]  h-full bg-white w-full">
                      <div className="relative">
                        <img src={li4} alt="" />
                        <div className="absolute top-0 left-6 mt-8 text-primary bg-white w-[85px] h-[46px] text-2xl font-mincho font-extrabold flex items-center justify-center shadow-md">
                          75%
                        </div>{" "}
                      </div>
                      <div className="p-8">
                        <h1 className="font-mincho text-2xl font-extrabold text-tertiary">
                          Big charity: build school for poor children
                        </h1>
                        <div className="rounded-full h-1 w-full md:w-[300px] bg-[#C5CECC] mt-4 md:mt-6">
                          <div className="bg-primary h-1 md:w-[250px] w-[150px] rounded-full"></div>
                        </div>
                        <div className="flex items-center justify-between mt-3">
                          <p className="font-mincho font-extrabold text-md text-tertiary">
                            Raised - $5M
                          </p>
                          <p className="font-mincho font-extrabold text-md text-primary">
                            Goal-$10M
                          </p>
                        </div>
                        <a href="" target="_blank" rel="noopener noreferrer">
                          <button className=" w-[115px] h-[45px]  bg-tertiary md:text-md text-sm rounded-sm text-white hover:bg-primary hover:text-white mt-6  ">
                            DONATE
                          </button>
                        </a>{" "}
                      </div>
                    </div>
                  </SwiperSlide>
                  {/* img5 */}
                  <SwiperSlide>
                    {" "}
                    <div className="md:w-[365px]  h-full bg-white w-full">
                      <div className="relative">
                        <img src={li5} alt="" />
                        <div className="absolute top-0 left-6 mt-8 text-primary bg-white w-[85px] h-[46px] text-2xl font-mincho font-extrabold flex items-center justify-center shadow-md">
                          65%
                        </div>{" "}
                      </div>
                      <div className="p-8">
                        <h1 className="font-mincho text-2xl font-extrabold text-tertiary">
                          Big charity: build school for poor children
                        </h1>
                        <div className="rounded-full h-1 w-full md:w-[300px] bg-[#C5CECC] mt-4 md:mt-6">
                          <div className="bg-primary h-1 md:w-[190px] w-[150px] rounded-full"></div>
                        </div>
                        <div className="flex items-center justify-between mt-3">
                          <p className="font-mincho font-extrabold text-md text-tertiary">
                            Raised - $5M
                          </p>
                          <p className="font-mincho font-extrabold text-md text-primary">
                            Goal-$10M
                          </p>
                        </div>
                        <a href="" target="_blank" rel="noopener noreferrer">
                          <button className=" w-[115px] h-[45px]  bg-tertiary md:text-md text-sm rounded-sm text-white hover:bg-primary hover:text-white mt-6  ">
                            DONATE
                          </button>
                        </a>{" "}
                      </div>
                    </div>
                  </SwiperSlide>
                  {/* img6 */}
                </div>
              </Swiper>
            </div>
            {/* Mobile view */}
            <div className="flex sm:hidden">
              <Swiper
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
              >
                <SwiperSlide>
                  {" "}
                  <div className=" h-full bg-white w-full">
                    <div className="relative">
                      <img src={li2} alt="" />
                      <div className="absolute top-0 left-6 mt-8 text-primary bg-white w-[85px] h-[46px] text-2xl font-mincho font-extrabold flex items-center justify-center shadow-md">
                        85%
                      </div>{" "}
                    </div>
                    <div className="p-8">
                      <h1 className="font-mincho md:text-2xl font-extrabold text-tertiary">
                        Big charity: build school for poor children
                      </h1>
                      <div className="rounded-full h-1 w-full md:w-[300px] bg-[#C5CECC] mt-4 md:mt-6">
                        <div className="bg-primary h-1 md:w-[160px] w-[150px] rounded-full"></div>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <p className="font-mincho font-extrabold text-md text-tertiary">
                          Raised - $5M
                        </p>
                        <p className="font-mincho font-extrabold text-md text-primary">
                          Goal-$10M
                        </p>
                      </div>
                      <a href="" target="_blank" rel="noopener noreferrer">
                        <button className=" w-[115px] h-[45px]  bg-tertiary md:text-md text-sm rounded-sm text-white hover:bg-primary hover:text-white mt-6  ">
                          DONATE
                        </button>
                      </a>{" "}
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="md:w-[365px]  h-full bg-white w-full">
                    <div className="relative">
                      <img src={li1} alt="" />
                      <div className="absolute top-0 left-6 mt-8 text-primary bg-white w-[85px] h-[46px] text-2xl font-mincho font-extrabold flex items-center justify-center shadow-md">
                        85%
                      </div>{" "}
                    </div>
                    <div className="p-8">
                      <h1 className="font-mincho text-2xl font-extrabold text-tertiary">
                        Big charity: build school for poor children
                      </h1>
                      <div className="rounded-full h-1 w-full md:w-[300px] bg-[#C5CECC] mt-4 md:mt-6">
                        <div className="bg-primary h-1 md:w-[160px] w-[150px] rounded-full"></div>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <p className="font-mincho font-extrabold text-md text-tertiary">
                          Raised - $5M
                        </p>
                        <p className="font-mincho font-extrabold text-md text-primary">
                          Goal-$10M
                        </p>
                      </div>
                      <a href="" target="_blank" rel="noopener noreferrer">
                        <button className=" w-[115px] h-[45px]  bg-tertiary md:text-md text-sm rounded-sm text-white hover:bg-primary hover:text-white mt-6  ">
                          DONATE
                        </button>
                      </a>{" "}
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="md:w-[365px]  h-full bg-white w-full">
                    <div className="relative">
                      <img src={li3} alt="" />
                      <div className="absolute top-0 left-6 mt-8 text-primary bg-white w-[85px] h-[46px] text-2xl font-mincho font-extrabold flex items-center justify-center shadow-md">
                        85%
                      </div>{" "}
                    </div>
                    <div className="p-8">
                      <h1 className="font-mincho text-2xl font-extrabold text-tertiary">
                        Big charity: build school for poor children
                      </h1>
                      <div className="rounded-full h-1 w-full md:w-[300px] bg-[#C5CECC] mt-4 md:mt-6">
                        <div className="bg-primary h-1 md:w-[160px] w-[150px] rounded-full"></div>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <p className="font-mincho font-extrabold text-md text-tertiary">
                          Raised - $5M
                        </p>
                        <p className="font-mincho font-extrabold text-md text-primary">
                          Goal-$10M
                        </p>
                      </div>
                      <a href="" target="_blank" rel="noopener noreferrer">
                        <button className=" w-[115px] h-[45px]  bg-tertiary md:text-md text-sm rounded-sm text-white hover:bg-primary hover:text-white mt-6  ">
                          DONATE
                        </button>
                      </a>{" "}
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="md:w-[365px]  h-full bg-white w-full">
                    <div className="relative">
                      <img src={li5} alt="" />
                      <div className="absolute top-0 left-6 mt-8 text-primary bg-white w-[85px] h-[46px] text-2xl font-mincho font-extrabold flex items-center justify-center shadow-md">
                        85%
                      </div>{" "}
                    </div>
                    <div className="p-8">
                      <h1 className="font-mincho text-2xl font-extrabold text-tertiary">
                        Big charity: build school for poor children
                      </h1>
                      <div className="rounded-full h-1 w-full md:w-[300px] bg-[#C5CECC] mt-4 md:mt-6">
                        <div className="bg-primary h-1 md:w-[160px] w-[150px] rounded-full"></div>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <p className="font-mincho font-extrabold text-md text-tertiary">
                          Raised - $5M
                        </p>
                        <p className="font-mincho font-extrabold text-md text-primary">
                          Goal-$10M
                        </p>
                      </div>
                      <a href="" target="_blank" rel="noopener noreferrer">
                        <button className=" w-[115px] h-[45px]  bg-tertiary md:text-md text-sm rounded-sm text-white hover:bg-primary hover:text-white mt-6  ">
                          DONATE
                        </button>
                      </a>{" "}
                    </div>
                  </div>
                </SwiperSlide>
                <div className="custom-pagination "></div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <Community />
    </div>
  );
};

export default little;
