import React from "react";
import TechnicalDevelopmentImage from "../Assets/Technical Development.png";

function TechnicalDevelopment() {
  return (
    <div className="mt-10 mb-10">
      <div className="pt-10 pb-10 mr-4 ml-4 sm:mr-8 sm:ml-8 md:mr-14 md:ml-14 flex flex-row justify-between items-center ">
        <div className="w-[50%] flex justify-center">
          <img
            src={TechnicalDevelopmentImage}
            className="h-[200px] w-[200px] md:h-[400px] md:w-[400px]"
            alt=""
          />
        </div>
        <div className="w-[50%]">
          <p className="font-black text-base xs:text-3xl sm:text-2xl lg:text-4xl text-[#c13645] text-end sm:mb-10">
            <span className="sm:border-b-2 sm:border-b-[#707070] sm:pb-4">
              Technical Development
            </span>
          </p>
          <p className="font-medium sm:font-bold text-xs sm:text-base mt-5  text-end leading-[1.5] md:leading-[2]">
            Focusing on fun learning and engagement of the students we teach our
            students the basics of computer programming, hardware and software
            design, and engineering principles using hands-on activities allow
            children to apply scientific and mathematical principles to
            real-world situations, enhancing their understanding of these
            subjects. By the end of our courses each of our student represents
            their very own Robot/AI app that they fully created from scratch.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TechnicalDevelopment;
