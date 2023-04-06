import React from "react";
import png from "../assets/logo.png";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <div>
      <footer className="relative bg-[#E2E8F0] pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl fonat-semibold text-blueGray-700">
                <img src={png} alt="" className="w-36" />
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                You can shop now for your ideas gift shop items at Gift Gallery
                to find many types of gift sets. Get wholesale ideas gift shop
                items that are presentable enough.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <ul className="flex gap-[15px] text-gray-600 cursor-pointer">
                  <li className="ease-in duration-200 hover:text-gray-500">
                    <Icon icon="ri:facebook-circle-fill" width="24" />
                  </li>
                  <li className="ease-in duration-200 hover:text-gray-500">
                    <Icon icon="jam:linkedin-circle" width="24" />
                  </li>
                  <li className="ease-in duration-200 hover:text-gray-500">
                    <Icon icon="mdi:github" width="24" />
                  </li>
                  <li className="ease-in duration-200 hover:text-gray-500">
                    <Icon icon="ant-design:twitter-circle-filled" width="24" />
                  </li>
                  <li className="ease-in duration-200 hover:text-gray-500">
                    <Icon icon="mdi:instagram" width="24" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase  text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a className=" font-semibold block pb-2 text-sm" href="/">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a className=" font-semibold block pb-2 text-sm" href="/">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a className=" font-semibold block pb-2 text-sm" href="/">
                        Github
                      </a>
                    </li>
                    <li>
                      <a className=" font-semibold block pb-2 text-sm" href="/">
                        Free Products
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase  text-sm font-semibold mb-2">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a className=" font-semibold block pb-2 text-sm" href="/">
                        MIT License
                      </a>
                    </li>
                    <li>
                      <a className=" font-semibold block pb-2 text-sm" href="/">
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <a className=" font-semibold block pb-2 text-sm" href="/">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a className="font-semibold block pb-2 text-sm" href="/">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm  font-semibold py-1">
                Copyright © 2023 - All right reserved by Gift Gallery.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
