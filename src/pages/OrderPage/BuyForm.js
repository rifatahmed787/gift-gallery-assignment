import React from "react";
import { useForm } from "react-hook-form";

const BuyForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <div class="container mx-auto my-20 w-1/3   bg-[#F3F4F6] ">
        <div class="p-5 space-y-5 shadow-xl border border-orange-400">
          <h4 class="text-center text-3xl">Order Now</h4>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-5 ">
              <input
                type="text"
                placeholder="First Name"
                {...register("name", { required: "Name is required" })}
                className="border border-orange-400 px-4 py-2 bg-orange-100 focus:outline-none focus:border-orange-400"
                style={{ fontSize: "14px", height: "50px" }}
              />

              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className="border border-orange-400 bg-orange-100 px-4 py-2 focus:outline-none focus:border-orange-400"
                style={{ fontSize: "14px", height: "50px" }}
                placeholder="Last Name"
              />
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className="border border-orange-400 bg-orange-100 px-4 py-2 focus:outline-none focus:border-orange-400 col-span-2"
                style={{ fontSize: "14px", height: "50px" }}
                placeholder="Email"
              />
              <input
                type="tel"
                {...register("phone", { required: "Phone is required" })}
                className="border border-orange-400 bg-orange-100 px-4 py-2 focus:outline-none focus:border-orange-400 col-span-2"
                style={{ fontSize: "14px", height: "50px" }}
                placeholder="Phone"
              />
              <input
                type="loc"
                {...register("location", { required: "Location is required" })}
                className="border border-orange-400 bg-orange-100 px-4 py-2 focus:outline-none focus:border-orange-400 col-span-2"
                style={{ fontSize: "14px", height: "50px" }}
                placeholder="Location"
              />

              <textarea
                type="text"
                cols="10"
                rows="5"
                {...register("text", {
                  required: "Please write something",
                })}
                className="border border-orange-400 bg-orange-100 px-4 py-2 focus:outline-none focus:border-orange-400 col-span-2"
                placeholder="Write your message..."
              ></textarea>
            </div>
            <input
              type="submit"
              value="Complete Order"
              className="btn border border-none mt-5 bg-orange-400 hover:bg-orange-500 px-4 py-2 text-white font-bold w-full"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BuyForm;
