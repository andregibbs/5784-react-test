import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="bg-grey">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2">
            <div className="flex justify-center p-10 md:p-48">
              <div className="row-span-3">
                <h1 className="text-4xl font-bold mb-4">What are<br /><span className='text-dark-grey'>we capable of</span></h1>
                <div className="row-span-1 pb-5">
                  <p>By focusing on design as an enabler and putting a huge emphasis on our clients as co-producers, we create innovative, sustainable marketing that enhances brand experience and user engagement.
                  </p>
                </div>

                <div>
                  <a href="/" className="cta-pink">Our process</a>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
          <div className="grid grid-cols-2 gap-8 sm:gap-6 pb-10">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Brand</h2>
              <ul className="text-gray-600 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="/" className="hover:underline">Brand Strategy</a>
                </li>
                <li>
                  <a href="/" className="hover:underline">Logo & Name</a>
                </li>
                <li>
                  <a href="/" className="hover:underline">Identity & Collateral</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Marketing</h2>
              <ul className="text-gray-600 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="/" className="hover:underline ">Digital Marketing</a>
                </li>
                <li>
                  <a href="/" className="hover:underline">Market Research</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Development</h2>
              <ul className="text-gray-600 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="/" className="hover:underline">eCommerce</a>
                </li>
                <li>
                  <a href="/" className="hover:underline">Web Development</a>
                </li>
                <li>
                  <a href="/" className="hover:underline">Mobile Apps</a>
                </li>
              </ul>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;