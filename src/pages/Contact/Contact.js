import React from "react";
import { useForm } from "react-hook-form";
import { Icon } from "@iconify/react";

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className=" min-h-screen">
      <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div className="flex justify-center items-center py-6 md:py-0 md:px-6">
            <div>
              <h1 className="text-4xl font-bold">Get in touch</h1>
              <p className="pt-2 pb-4">
                Fill in the form to start a conversation
              </p>
              <div className="space-y-4">
                <p className="flex items-center">
                  <Icon
                    icon="ic:baseline-location-on"
                    className="w-5 h-5 mr-2 sm:mr-6"
                  />
                  <span>Mirpur-10, Dhaka</span>
                </p>
                <p className="flex items-center">
                  <Icon
                    icon="material-symbols:phone-forwarded-rounded"
                    className="w-5 h-5 mr-2 sm:mr-6"
                  />
                  <span>123456789</span>
                </p>
                <p className="flex items-center">
                  <Icon
                    icon="mdi:gmail"
                    fill="currentColor"
                    className="w-5 h-5 mr-2 sm:mr-6"
                  />
                  <span>mdrifatahmed787@gmail.com</span>
                </p>
              </div>
            </div>
          </div>
          <div class="container mx-auto mt-20 w-11/12   bg-[#F3F4F6] ">
            <div class="p-5 space-y-5 shadow-xl border border-orange-400">
              <h4 class="text-center text-3xl">Contact Us</h4>

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
                  value="Send Message"
                  className="btn border border-none mt-5 bg-orange-400 hover:bg-orange-500 px-4 py-2 text-white font-bold w-full"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
