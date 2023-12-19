import React from "react";
import monkey from "../../img/monkey.png";
import "./Main.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Main = () => {
  return (
    <div className="bg-indigo-950 flex flex-col md:flex-row p-2  justify-center items-center ">
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="flex flex-col items-center text-center md:items-start  md:py-6 content text-white gap-3 "
      >
        <h2 className=" text-cyan ">Welcome to Yorfy</h2>
        <h3 className="  md:text-left lg:text-5xl ">
          Now Available, Meet Yorfy NFT Collection⭐️
        </h3>
        <p className=" md:text-sm md:text-left ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="w-full flex justify-evenly md:justify-start md:gap-6 items-center ">
          <div className="flex flex-col items-center">
            <CountUp end={546} duration={2} />
            <p className="text-xs">NFT Items</p>
          </div>
          <div className="h-20 md:h-16 border-r-2 border-white-400 md:mt-4 mb-6"></div>
          <div className="flex flex-col items-center">
            <CountUp end={42} duration={2} />
            <p className="text-xs">Owners</p>
          </div>
          <div className="h-20 md:h-16 border-r-2 border-white-400 md:mt-4 mb-6"></div>
          <div className="flex flex-col items-center">
            <CountUp end={378} duration={2} />
            <p className="text-xs">Items Sold</p>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500"
        className="right-side"
      >
        <div className=" px-3  flex justify-center  ">
          <img src={monkey} alt="faces" className="img" />
        </div>
        <div className=" text-white border border-Blue  flex flex-col lg:flex-row gap-3 justify-center pb-7 pt-32 -mt-[7rem] rounded-md px-4 ">
          <motion.button
            className="border-white border-1 py-2 px-4  rounded-lg text-xs bg-blue-600"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Buy on OpenSea
          </motion.button>
          <motion.button
            className="border-white border-1 py-2 px-4 rounded-lg text-xs"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Know More
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Main;
