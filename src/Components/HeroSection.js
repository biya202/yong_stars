import React from "react";
import { BsPlayCircle } from "react-icons/bs";

import banner from "../Assets/banner.png";

function HeroSection() {
  return (
    <div className="mt-14">
      <p className="text-[#c13645] text-center font-semibold md:font-bold text-base sm:text-xl md:text-3xl">
        Enlightening Tomorrows Innovators
      </p>
      <div className="mr-4 ml-4 sm:mr-8 sm:ml-8 md:mr-14 md:ml-14 mt-6 md:mt-10">
        <div className="bg-[#d9d9d9] h-[200px] sm:h-[350px] lg:h-[500px] rounded-2xl flex justify-center items-center">
          <BsPlayCircle className="text-6xl text-[#c13645] " />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
