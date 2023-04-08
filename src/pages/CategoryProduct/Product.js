import React from "react";
import { useLoaderData } from "react-router-dom";

const Product = () => {
  const products = useLoaderData();

  return (
    <div
      className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-items-center items-center min-h-screen bg-gray-50 py-14"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      {products?.map((product) => (
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
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
