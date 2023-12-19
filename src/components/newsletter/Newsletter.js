import React from "react";

import { motion } from "framer-motion";

export const Newsletter = () => {
  return (
    <div className="bg-indigo-950 py-6">
      <div className="bg-blue-950 p-8 rounded-xl text-white flex flex-col justify-center items-center gap-3 md:w-[80%] mx-auto md:mb-16 ">
        <h3>Newsletter</h3>
        <h1 className="text-center">You Do Not Want to Miss Out on this!</h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex flex-col items-center gap-3 md:flex-row ">
          <input
            type="text"
            placeholder="Enter Text"
            className="bg-blue-950 border-1 rounded-md p-2  "
          />
          <motion.button
            className="bg-blue-600 p-2 rounded-lg w-full"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Submit
          </motion.button>
        </div>
      </div>
    </div>
  );
};
