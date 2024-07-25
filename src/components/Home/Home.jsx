import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import back from "../../assets/Images/Home/back.png";
import hbg2 from "../../assets/Images/Home/hbg2.png";
import hbg3 from "../../assets/Images/Home/hbg3.png";

function Home() {
  return (
    <div className=" relative">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000, // Slide delay in milliseconds
          disableOnInteraction: false, // Enable autoplay even after interaction
        }}
        history={{
          key: "slide",
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={back} alt="Slide 1" />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src={hbg2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hbg3} alt="Slide 3" />
        </SwiperSlide> */}

        <div className="container relative z-10">
          <p>p</p>
        </div>
      </Swiper>
    </div>
  );
}

export default Home;
