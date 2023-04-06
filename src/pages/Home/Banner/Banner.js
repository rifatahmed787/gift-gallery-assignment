import React from "react";
import img1 from "../../../assets/bannar/service1.avif";
import img2 from "../../../assets/bannar/service2.avif";
import img3 from "../../../assets/bannar/service3.avif";

const Banner = () => {
  return (
    <div className="border-b-4 border-[#DFDFDF] border-dotted">
      <section className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  my-20 text-center">
        <div className="border-r-4 border-[#DFDFDF] border-dotted">
          <img src={img1} alt="" className="mx-auto" />
          <p className="text-lg leading-5 py-4 text-black font-normal font-mono">
            Delivering quality gifts
          </p>
          <p className="text-md leading-5 font-normal font-mono text-[#DFDFDF]">
            information on its origins
          </p>
        </div>
        <div className="border-r-4 border-[#DFDFDF] border-dotted">
          <img src={img2} alt="" className="mx-auto" />
          <p className="text-lg leading-5 py-4 text-black font-normal font-mono">
            Gifts for all occasions
          </p>
          <p className="text-md leading-5 font-normal font-mono text-[#DFDFDF]">
            Variants and technical
          </p>
        </div>
        <div className="">
          <img src={img3} alt="" className="mx-auto" />
          <p className="text-lg leading-5 py-4 text-black font-normal font-mono">
            Great customer service
          </p>
          <p className="text-md leading-5 font-normal font-mono text-[#DFDFDF]">
            random Lipsum generator
          </p>
        </div>
      </section>
    </div>
  );
};

export default Banner;
