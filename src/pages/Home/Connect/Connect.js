import React from "react";

const Connect = () => {
  return (
    <div className="flex justify-center items-center rounded-lg my-5 container mx-auto h-80 bg-[#F7DCDC] dark:bg-black dark:border dark:text-white">
      <div>
        <div className="mt-5">
          <h1 className="text-4xl font-serif font-bold">LET'S STAY IN TOUCH</h1>
          <p className="py-2">Get updates on sales, special and more</p>
        </div>
        <div>
          <form>
            <div className="py-3">
              <input
                type="Email"
                placeholder="example@gmail.com"
                className="input input-bordered w-full dark:bg-black dark:text-white dark:border-white"
              />
            </div>
            <button
              id="button"
              type="submit"
              className="bg-orange-400 shadow-xl hover:bg-orange-300 text-white font-bold rounded-full p-4 w-32"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Connect;
