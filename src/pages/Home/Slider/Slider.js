import React from "react";
import img1 from "../../../assets/slider image/img1.png";
import img2 from "../../../assets/slider image/img3.png";
import img3 from "../../../assets/slider image/img3.png";
import img4 from "../../../assets/slider image/img4.png";
import img5 from "../../../assets/slider image/img3.png";

// import { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="grid lg:grid-cols-2 justify-items-center space-y-5 bg-[#F8A3A4] dark:text-white  dark:bg-black">
            <div className="my-auto">
              <h2 className="text-5xl font-mono font-thin text-black tracking-wide">
                Gift More
              </h2>
              <h2 className="text-5xl font-mono font-thin text-black tracking-wide">
                Spend Less
              </h2>
              <p className="py-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                <br />
                Commodi fuga ullam fugiat, id velit dicta.
              </p>
              <h2 className="pb-5 text-xl font-thin font-mono">
                From: $ 19.30
              </h2>
              <Link to="/shop">
                <button className=" bg-white border-none hover:bg-[#BE7374] rounded-full px-10 py-4 font-mono font-bold text-xl hover:text-white">
                  SHOP NOW
                </button>
              </Link>
            </div>

            <img
              className="lg:w-[650px] md:w-96 sm:w-full pb-[54px]"
              src={img1}
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid lg:grid-cols-2 justify-items-center pb-10 pt-4 bg-[#F9A2A3] dark:bg-black dark:text-white">
            <div className="my-auto">
              <h2 className="text-5xl font-mono font-thin text-black tracking-wide">
                Gift More
              </h2>
              <h2 className="text-5xl font-mono font-thin text-black tracking-wide">
                Spend Less
              </h2>
              <p className="py-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                <br />
                Commodi fuga ullam fugiat, id velit dicta.
              </p>
              <h2 className="pb-5 text-xl font-thin font-mono">
                From: $ 15.00
              </h2>
              <Link to="/shop">
                <button className=" bg-white border-none hover:bg-[#BE7374] rounded-full px-10 py-4 font-mono font-bold text-xl hover:text-white">
                  SHOP NOW
                </button>
              </Link>
            </div>
            <img className="lg:w-[500px] md:w-96 sm:full" src={img2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid lg:grid-cols-2 justify-items-center pb-10 pt-4 bg-[#F9A2A3] dark:bg-black dark:text-white">
            <div className="my-auto">
              <h2 className="text-5xl font-mono font-thin text-black tracking-wide">
                Gift More
              </h2>
              <h2 className="text-5xl font-mono font-thin text-black tracking-wide">
                Spend Less
              </h2>
              <p className="py-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                <br />
                Commodi fuga ullam fugiat, id velit dicta.
              </p>
              <h2 className="pb-5 text-xl font-thin font-mono">
                From: $ 14.00
              </h2>
              <Link to="/shop">
                <button className=" bg-white border-none hover:bg-[#BE7374] rounded-full px-10 py-4 font-mono font-bold text-xl hover:text-white">
                  SHOP NOW
                </button>
              </Link>
            </div>
            <img className="lg:w-[500px] md:w-96 sm:w-full" src={img3} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid lg:grid-cols-2 justify-items-center space-y-5 bg-[#F9A2A3] dark:bg-black dark:text-white">
            <div className="my-auto">
              <h2 className="text-5xl font-mono font-thin text-black tracking-wide">
                Gift More
              </h2>
              <h2 className="text-5xl font-mono font-thin text-black tracking-wide">
                Spend Less
              </h2>
              <p className="py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br />
                Suscipit quidem voluptates soluta, consequatur nisi quaerat.
              </p>
              <h2 className="pb-5 text-xl font-thin font-mono">
                From: $ 20.29
              </h2>
              <Link to="/shop">
                {" "}
                <button className=" bg-white border-none hover:bg-[#BE7374] rounded-full px-10 py-4 font-mono font-bold text-xl hover:text-white">
                  SHOP NOW
                </button>
              </Link>
            </div>
            <img className="lg:w-[430px] md:w-96 sm:w-full" src={img4} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid lg:grid-cols-2 justify-items-center space-y-5 dark:text-white bg-[#F9A2A3] dark:bg-black">
            <div className="my-auto">
              <h2 className="text-5xl font-mono font-thin text-black tracking-wide">
                Gift More
              </h2>
              <h2 className="text-5xl font-mono font-thin text-black tracking-wide">
                Spend Less
              </h2>
              <p className="py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br />
                Officiis eius qui suscipit quisquam blanditiis perferendis.
              </p>
              <h2 className="pb-5 text-xl font-thin font-mono">
                From: $ 10.20
              </h2>
              <Link to="/shop">
                <button className=" bg-white border-none hover:bg-[#BE7374] rounded-full px-10 py-4 font-mono font-bold text-xl hover:text-white">
                  SHOP NOW
                </button>
              </Link>
            </div>
            <img className="lg:w-[530px] md:w-96 sm:w-full" src={img5} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
