import React from "react";
import "../Category/Category.css";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import DotSpinner from "../../../components/DotSpinner";
import ErrorPage from "../../ErrorPage/ErrorPage";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Category = () => {
  const {
    isLoading,
    isError,
    data: categories = [],
  } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("category.json");
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <DotSpinner />;
  }

  if (isError) {
    return <ErrorPage />;
  }

  return (
    <div>
      <div className="py-10 bg-white dark:bg-black grid place-content-center px-5">
        <h1 className="capitalize text-3xl md:text-4xl lg:text-4xl font-mono text-center  text-black animate-pulse">
          categories
        </h1>
        <p className="mb-10 text-center font-serif mt-2">
          Browse items by category.
        </p>
        <div
          className="grid lg:grid-cols-4 gap-7 justify-center"
          data-aos="flip-up"
          data-aos-duration="1000"
        >
          {categories.map((category) => (
            <div key={category.id}>
              <div className="max-w-sm shadow-2xl bg-orange-300 relative card rounded-md overflow-hidden">
                <div className="relative">
                  <img src={category.img} alt="" className="w-96 h-60" />
                  <div className="custom-shape-divider-bottom-1635508836">
                    <svg
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1200 120"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                        className="shape-fill"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-4 px-4">
                  <span className="text-sm text-gray-500 -mb-1 block"></span>
                  <h2 className="text-xl text-pink-400">{category.name}</h2>
                </div>
                <div className="absolute top-0 right-0 bg-orange-400 cursor-pointe w-full h-full flex justify-center items-center card-overlay">
                  <Link to={`/product/${category.category_id}`}>
                    <Icon
                      icon="material-symbols:arrow-forward-ios"
                      className="h-12 w-12 text-white cursor-pointer"
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Category;
