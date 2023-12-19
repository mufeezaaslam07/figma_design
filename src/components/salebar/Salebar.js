import React from "react";

export const Salebar = () => {
  return (
    <div className="bg-indigo-950 flex justify-center items-center ">
      <div
        data-aos="zoom-out"
        className="bg-purple-600 w-full px-6 py-4 lg:mt-[2rem]"
      >
        <div className=" flex flex-col md:flex-row justify-evenly items-center text-white">
          <h4 className="font-bold"> Discount Sale</h4>
          <h4 className="outlined-text"> Up to 40%</h4>
          <h4 className="font-bold"> Discount Sale</h4>
          <h4 className="outlined-text"> Up to 40%</h4>
        </div>
      </div>
    </div>
  );
};
