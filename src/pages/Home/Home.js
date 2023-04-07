import React from "react";
import Slider from "./Slider/Slider";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Discount from "./Discount/Discount";
import Testimonial from "./Testimonial/Testimonial";
import Connect from "./Connect/Connect";

const Home = () => {
  return (
    <div>
      <Slider />
      <Banner />
      <Category />
      <Discount />
      <Testimonial />
      <Connect />
    </div>
  );
};

export default Home;
