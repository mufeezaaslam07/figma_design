import React from "react";
import face1 from "../../img/1.png";
import text1 from "../../img/4.png";
import face2 from "../../img/2.png";
import text2 from "../../img/5.png";
import face3 from "../../img/3.png";
import text3 from "../../img/6.png";

import { motion } from "framer-motion";

export const Collection = () => {
  return (
    <div className="bg-indigo-950 ">
      <div className="flex flex-col  items-center">
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="flex flex-col justify-center items-center md:py-6  text-white"
        >
          <h4 className="mt-6 text-cyan ">Collection</h4>
          <h1 className="text-center mt-2  ">Yorfy NFT Collections</h1>
          <p className="text-center mt-2 p-2 text-xs  lg:text-xl ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="flex flex-col mx-4 md:flex-row justify-center gap-2"
        >
          <div className=" p-6 flex flex-col gap-3 border-blue-500 border-1 rounded-xl">
            <img src={face1} alt="" />
            <img src={text1} alt="" />
          </div>
          <div className=" p-6 flex flex-col gap-3 border-blue-500 border-1 rounded-xl">
            <img src={face2} alt="" />
            <img src={text2} alt="" />
          </div>
          <div className=" p-6 flex flex-col gap-3 border-blue-500 border-1 rounded-xl">
            <img src={face3} alt="" />
            <img src={text3} alt="" />
          </div>
        </div>
        <motion.button
          className="text-white border-white border-1 p-2 rounded-lg my-6 md:w-[20%] "
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          View an OpenSea
        </motion.button>
      </div>
    </div>
  );
};
