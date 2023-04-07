import React, { useEffect } from "react";
import png from "../../assets/favicon.png";

const About = () => {
  //handle scrolling
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <section className="m-4 md:m-8 dark:bg-gray-800 dark:text-gray-100">
        <div className="flex items-center justify-center mb-8">
          <img className="h-10 w-10" src={png} alt="Logo" />
          <h1 className="text-4xl font-bold">About Gift Galley</h1>
        </div>
        <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center p-4">
            <img className="h-10 w-10" src={png} alt="Logo" />
            <h3 className="my-3 text-3xl font-semibold">Product</h3>
            <div className="space-y-1 leading-tight">
              <p>We value quality</p>
              <p>and craftsmanship</p>
              <p>Blanditiis aut mollitia ex</p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4">
            <img className="h-10 w-10" src={png} alt="Logo" />
            <h3 className="my-3 text-3xl font-semibold">Product</h3>
            <div className="space-y-1 leading-tight">
              <p>We believe in sustainability</p>
              <p>and ethical practices</p>
              <p>Blanditiis aut mollitia ex</p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4">
            <img className="h-10 w-10" src={png} alt="Logo" />
            <h3 className="my-3 text-3xl font-semibold">Product</h3>
            <div className="space-y-1 leading-tight">
              <p>We are committed to </p>
              <p>customer satisfaction</p>
              <p>Blanditiis aut mollitia ex</p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4">
            <img className="h-10 w-10" src={png} alt="Logo" />
            <h3 className="my-3 text-3xl font-semibold">Product</h3>
            <div className="space-y-1 leading-tight">
              <p>We believe in giving </p>
              <p>back to our community</p>
              <p>Blanditiis aut mollitia ex</p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4">
            <img className="h-10 w-10" src={png} alt="Logo" />
            <h3 className="my-3 text-3xl font-semibold">Product</h3>
            <div className="space-y-1 leading-tight">
              <p>Similique quas ea veniam</p>
              <p>Tempore quasi porro</p>
              <p>Blanditiis aut mollitia ex</p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4">
            <img className="h-10 w-10" src={png} alt="Logo" />
            <h3 className="my-3 text-3xl font-semibold">Product</h3>
            <div className="space-y-1 leading-tight">
              <p>Similique quas ea veniam</p>
              <p>Tempore quasi porro</p>
              <p>Blanditiis aut mollitia ex</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
