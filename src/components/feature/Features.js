import React from "react";
import logo from "../../img/lg.png";
import faces from "../../img/face.png";
import { motion } from "framer-motion";

export const Features = () => {
  return (
    <div className="bg-indigo-950 md:px-10">
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="flex flex-col justify-center items-center md:py-6  text-white"
      >
        <h4 className="mt-6 text-cyan ">Featured</h4>
        <h1 className="text-center mt-2  ">
          Hot Trending On This Week from Yorfy
        </h1>
        <p className="text-center mt-2 p-2 text-xs  lg:text-xl ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div
        data-aos="flip-left"
        className="p-8 mx-2 bg-blue-950 rounded-2xl flex flex-col justify-center items-center md:flex-row"
      >
        <div className="flex flex-col justify-center items-center text-center text-white gap-2">
          <img className="w-[50px]" src={logo} alt="logo" />
          <h1>YorEyes #234</h1>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="flex items-stretch ">
          <img className="md:h-[460px] md:w-[1660px]" src={faces} alt="" />
        </div>
        <div className="flex flex-col justify-center items-center text-center text-white gap-2   ">
          <h1 className="md:text-[26px]">Interesting with This Item?</h1>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <motion.button
            className="bg-blue-600 p-2 rounded-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Buy an OpenSea
          </motion.button>
        </div>
      </div>
    </div>
  );
};
