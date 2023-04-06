import React from "react";
import img1 from "../../../assets/section4/banner1_165x.avif";
import img2 from "../../../assets/section4/banner2_165x.avif";
import img3 from "../../../assets/section4/img2.png";
import { Link } from "react-router-dom";

const Discount = () => {
  return (
    <div>
      <section className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1  my-20 text-center">
        <div className="relative">
          <img src={img1} alt="" className="w-11/12 mx-auto" />
          <div className="absolute top-36 left-24 ">
            <p className="text-base font-thin leading-5 py-4 text-black font-mono">
              Valentine’s Day
            </p>
            <p className="text-2xl  leading-5 font-thin font-mono text-black">
              Love Goes On
            </p>
          </div>
        </div>
        <div className="relative">
          <img src={img2} alt="" className="w-11/12 mx-auto" />
          <div className="absolute top-32 left-24">
            <p className="text-base font-thin leading-5 py-4 text-black font-mono">
              New Collection
            </p>
            <p className="text-2xl  leading-5 font-thin font-mono text-black">
              All Occasions
            </p>
          </div>
        </div>
        <div className="col-span-2 lg:flex justify-center items-center bg-[#F7DCDC] rounded-lg">
          <div className="text-center px-5">
            <p className="text-lg leading-5 py-4 text-black font-normal font-mono">
              Christmas Sale
            </p>
            <p className="text-4xl leading-5 font-thin font-serif py-5 text-black">
              Up To 40% Off
            </p>
            <Link>
              <button className=" bg-white border-none hover:bg-[#BE7374] rounded-full px-7 py-3 font-mono font-bold text-sm hover:text-white">
                VIEW DETAIL
              </button>
            </Link>
          </div>
          <img src={img3} alt="" className="w-1/2 mx-auto" />
        </div>
      </section>
    </div>
  );
};

export default Discount;
