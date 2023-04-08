import { useQuery } from "@tanstack/react-query";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import DotSpinner from "../../components/DotSpinner";
import ErrorPage from "../ErrorPage/ErrorPage";
AOS.init();

const AllProducts = () => {
  const {
    isLoading,
    isError,
    data: products = [],
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      try {
        const res = await fetch("products.json");
        if (!res.ok) {
          throw new Error(`Failed to fetch products: ${res.status}`);
        }
        const data = await res.json();
        return data;
      } catch (error) {
        throw new Error(`Failed to parse products JSON: ${error.message}`);
      }
    },
  });

  if (isLoading) {
    return <DotSpinner />;
  }

  if (isError) {
    return <ErrorPage />;
  }

  return (
    <div
      className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-items-center items-center gap-y-10 min-h-screen bg-gray-50 py-14"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white shadow-md hover:scale-105 hover:shadow-xl duration-500"
        >
          <img
            src={product.image_url}
            alt=""
            className="h-80 w-72 object-cover"
          />
          <div className="px-4 py-3 w-72">
            <p className="text-lg font-bold text-black truncate block capitalize">
              {product.name}
            </p>
            <p className="text-base  text-black truncate block capitalize">
              {product.description}
            </p>
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold text-black cursor-auto my-3">
                $ {product.price}
              </p>

              <div className="py-3">
                <button className="bg-orange-400 shadow-md hover:bg-orange-500 text-white font-bold rounded-full px-5 py-2">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
