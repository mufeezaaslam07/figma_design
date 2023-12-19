import React from "react";
import logo from "../../img/Logo.png";
import img1 from "../../img/12.png";
import img2 from "../../img/13.png";
import img3 from "../../img/14.png";
import img4 from "../../img/15.png";

export const Footer = () => {
  return (
    <div className="bg-indigo-950 ">
      <div className="text-white flex flex-col gap-4 items-center pb-6 ">
        <div className="flex flex-col gap-3 items-center md:flex-row md:justify-between w-[90%] ">
          <div className="">
            <img src={logo} alt="logo" />
          </div>
          <div className="flex gap-2">
            <img src={img4} alt="logo" />
            <img src={img2} alt="logo" />
            <img src={img3} alt="logo" />
            <img src={img1} alt="logo" />
          </div>
        </div>
        <div className="w-48 h-1 md:w-[90%] bg-blue-600"></div>
        <div className="text-center flex flex-col  md:flex-row md:justify-between w-[90%] ">
          <div> © 2022 Yorfy Template • All Rights Reserved</div>
          <div> Made With Love by Groweb Studio</div>
        </div>
      </div>
    </div>
  );
};
