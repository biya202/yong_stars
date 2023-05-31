import React from "react";
import testimonial_image from "../Assets/testimonial_image.png";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { BsPlayCircle } from "react-icons/bs";

function Teachers() {
  return (
    <div>
      <p className="text-[#c13645] max-sm:text-base text-2xl md:text-4xl text-center font-bold">
        From Happy Teachers and Parents
      </p>
      <div className="flex flex-row justify-between items-center mb-20 mr-4 ml-4 sm:mr-8 sm:ml-8 md:mr-14 md:ml-14 mt-6 md:mt-10">
        <div className="hidden md:block mr-10">
          <AiOutlineLeft className="text-4xl text-[#c13645] " />
        </div>

        <div className="h-[300px] lg:h-[500px] border-[20px] border-[#ededed] rounded-3xl flex flex-col justify-around items-center md:justify-center md:items-center mr-4 md:mr-10 w-[100%]">
          <div className="h-[320px] flex justify-center items-center">
            <BsPlayCircle className="text-6xl text-[#c13645] " />
          </div>
          <div className="h-[180px] flex flex-col justify-center items-center bg-[#ededed] w-[100%]">
            <p className="font-black">User name</p>
            <p className="font-medium">Profession</p>
          </div>
        </div>
        <div className="h-[300px] lg:h-[500px] border-[20px] border-[#ededed] rounded-3xl flex flex-col justify-around items-center md:justify-center md:items-center mr-4 md:mr-10  w-[100%]">
          <div className="h-[320px] flex justify-center items-center">
            <BsPlayCircle className="text-6xl text-[#c13645] " />
          </div>
          <div className="h-[180px] flex flex-col justify-center items-center bg-[#ededed] w-[100%]">
            <p className="font-black">User name</p>
            <p className="font-medium">Profession</p>
          </div>
        </div>
        <div className="h-[500px] border-[20px] border-[#ededed] rounded-3xl flex flex-col justify-around items-center md:justify-center md:items-center mr-4 md:mr-10  w-[100%] max-xl:hidden">
          <div className="h-[320px] flex justify-center items-center">
            <BsPlayCircle className="text-6xl text-[#c13645] " />
          </div>
          <div className="h-[180px] flex flex-col justify-center items-center bg-[#ededed] w-[100%]">
            <p className="font-black">User name</p>
            <p className="font-medium">Profession</p>
          </div>
        </div>

        <div>
          <AiOutlineRight className="text-2xl sm:text-4xl text-[#c13645] " />
        </div>
      </div>
    </div>
  );
}

export default Teachers;
