import React from "react";
import Slider from "./Slider/Slider";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Discount from "./Discount/Discount";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Slider />
      <Banner />
      <Category />
      <Discount />
      <Testimonial />
    </div>
  );
};

export default Home;
