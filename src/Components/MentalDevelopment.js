import React from "react";
import MentalDevelopmentImage from "../Assets/Mental Development.png";

function MentalDevelopment() {
  return (
    <div className="mt-10 mb-10">
      <div className="pt-10 pb-10 mr-4 ml-4 sm:mr-8 sm:ml-8 md:mr-14 md:ml-14 flex flex-row justify-between items-center ">
        <div className="w-[50%]">
          <p className="font-black text-base xs:text-3xl sm:text-2xl lg:text-4xl text-[#c13645] sm:mb-10">
            <span className="sm:border-b-2 sm:border-b-[#707070] sm:pb-4">
              Mental Development
            </span>
          </p>
          <p className="font-medium sm:font-bold text-xs sm:text-base mt-5   leading-[1.5] md:leading-[2]">
            Modules and tasks in every class teaching kids problem solving and
            critical thinking enhancing their creativity and communication
            skills as they collaborate with their teammates on solving complex
            problems with hands-on examples.
          </p>
        </div>
        <div className="w-[50%] flex justify-center">
          <img
            src={MentalDevelopmentImage}
            className="h-[200px] w-[200px] md:h-[400px] md:w-[400px]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default MentalDevelopment;
