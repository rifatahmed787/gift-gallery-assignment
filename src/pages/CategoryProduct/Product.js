import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductDetails from "./ProductDetails";

const Product = () => {
  const products = useLoaderData();

  return (
    <div
      className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-items-center items-center min-h-screen bg-gray-50 py-14"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      {products?.map((product) => (
        <ProductDetails product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Product;
