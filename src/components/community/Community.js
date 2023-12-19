import React from "react";

import { motion } from "framer-motion";

export const Community = () => {
  return (
    <div className="bg-indigo-950 py-8 flex justify-center">
      <div className=" flex flex-col justify-between  md:w-[80%] md:flex-row  items-center">
        <div className="text-white p-4 flex  flex-col justify-center md:w-[40%] text-center items-center md:items-start gap-3 mb-6  ">
          <div className="text-blue-400 font-bold  leading-loose">
            Community
          </div>
          <div className=" font-bold text-xl md:text-left  md:text-4xl ">
            Join Our Community and Get Many Benefits
          </div>
          <div className="md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <motion.button
            className="bg-blue-700 p-2 rounded-lg w-36 "
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Join Our Discord
          </motion.button>
        </div>
        <div className="flex flex-col gap-2 ">
          <div
            data-aos="zoom-in-left"
            className="w-full lg:w-[424px] h-[88px] p-4 bg-blue-950 rounded-lg shadow justify-start items-center gap-4 inline-flex"
          >
            <div className="w-14 h-14 bg-zinc-300 rounded-full"></div>
            <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
              <div className="self-stretch text-white text-base font-bold font-['Poppins'] leading-loose">
                ShooPharDhie
              </div>
              <div clasNames="self-stretch text-gray-200 text-xs font-normal font-['Poppins'] leading-normal">
                Last Online 2 Hour Ago
              </div>
            </div>
            <div className="w-6 h-6 relative text-white">...</div>
          </div>
          <div
            data-aos="zoom-in-left"
            className="w-full lg:w-[424px] h-[88px] p-4 opacity-70 bg-blue-950 rounded-lg shadow justify-start items-center gap-4 inline-flex md:ml-4"
          >
            <div className="w-14 h-14 bg-zinc-300 rounded-full"></div>
            <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
              <div className="self-stretch text-white text-base font-bold font-['Poppins'] leading-loose">
                ShooPharDhie
              </div>
              <div className="self-stretch text-gray-200 text-xs font-normal font-['Poppins'] leading-normal">
                Last Online 2 Hour Ago
              </div>
            </div>
            <div className="w-6 h-6 relative text-white">...</div>
          </div>
          <div
            data-aos="zoom-in-left"
            className="w-full lg:w-[424px] h-[88px] p-4 opacity-50 bg-blue-950 rounded-lg justify-start items-center gap-4 inline-flex  md:ml-8"
          >
            <div className="w-14 h-14 bg-zinc-300 rounded-full"></div>
            <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
              <div className="self-stretch text-white text-base font-bold font-['Poppins'] leading-loose">
                ShooPharDhie
              </div>
              <div className="self-stretch text-gray-200 text-xs font-normal font-['Poppins'] leading-normal">
                Last Online 2 Hour Ago
              </div>
            </div>
            <div className="w-6 h-6 relative text-white ">...</div>
          </div>
        </div>
      </div>
    </div>
  );
};
