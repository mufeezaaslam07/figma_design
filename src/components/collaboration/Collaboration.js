import React from "react";
import img7 from "../../img/7.png";
import img8 from "../../img/8.png";
import img11 from "../../img/11.png";
import img10 from "../../img/10.png";

export const Collaboration = () => {
  return (
    <div className="bg-indigo-950 md:px-10 ">
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="flex flex-col justify-center gap-4 items-center md:py-8 text-white "
      >
        <h4 className="mt-6 text-cyan ">Collaboration</h4>
        <h1 className="text-center mt-2 text-5xl ">Our Partners</h1>
        <div className=" flex flex-col gap-6 mt-6 md:flex-wrap md:flex-row mb-8 justify-center">
          <img src={img8} alt="" />
          <img src={img10} alt="" />
          <img src={img11} alt="" />
          <img src={img7} alt="" />
        </div>
      </div>
    </div>
  );
};
