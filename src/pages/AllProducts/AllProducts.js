import { useQuery } from "@tanstack/react-query";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import DotSpinner from "../../components/DotSpinner";
import ErrorPage from "../ErrorPage/ErrorPage";
import AllProductDetails from "./AllProductDetails";
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
        <AllProductDetails product={product} key={product.id} />
      ))}
    </div>
  );
};

export default AllProducts;
