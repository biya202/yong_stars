import React from "react";
import testimonial_image from "../Assets/testimonial_image.png";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

function Testimonials() {
  return (
    <div className="flex flex-row justify-between items-center mb-20 mr-4 ml-4 sm:mr-8 sm:ml-8 md:mr-14 md:ml-14 mt-6 md:mt-10">
      <div className="hidden md:block mr-10">
        <AiOutlineLeft className="text-4xl text-[#c13645] " />
      </div>

      <div className="h-[500px] border-[20px] border-[#ededed] rounded-3xl flex flex-col justify-around items-center md:justify-center md:items-center mr-4 md:mr-10 ">
        <div className="border-2 border-[#707070] rounded-xl h-[465px] flex flex-col justify-around items-center md:justify-center md:items-center ">
          <div className="flex justify-center items-center">
            <img
              src={testimonial_image}
              alt=""
              className="w-32 lg:w-40 rounded-full border border-[#707070]"
            />
          </div>
          <div>
            <p className="text-center pl-4 lg:pl-10 pr-4 lg:pr-10 md:pt-5">
              Slate helps you see how many more days you need to work to reach
              your financial goal for the month and year.
            </p>
            <div className="mt-4 text-center">
              <span className="fa fa-star text-orange-400 pr-2 text-xl"></span>
              <span className="fa fa-star text-orange-400 pr-2 text-xl"></span>
              <span className="fa fa-star text-orange-400 pr-2 text-xl"></span>
              <span className="fa fa-star text-orange-400 pr-2 text-xl"></span>
              <span className="fa fa-star border-orange-400 pr-2 text-xl"></span>
            </div>
            <p className="text-center text-[#c13645] font-semibold pt-4">
              Regina Miles
            </p>
            <p className="text-center font-semibold text-lg pt-4 ">Desginer</p>
          </div>
        </div>
      </div>
      <div className="h-[500px] border-[20px] border-[#ededed] rounded-3xl flex flex-row md:flex-col justify-around items-center md:justify-center md:items-center mr-10 max-xl:hidden">
        <div className="border-2 border-[#707070] rounded-xl h-[465px] flex flex-row md:flex-col justify-around items-center md:justify-center md:items-center ">
          <div className="flex justify-center items-center">
            <img
              src={testimonial_image}
              alt=""
              className="w-40 rounded-full border border-[#707070]"
            />
          </div>
          <div>
            <p className="text-center pl-10 pr-10 pt-5">
              Slate helps you see how many more days you need to work to reach
              your financial goal for the month and year.
            </p>
            <div className="mt-4 text-center">
              <span className="fa fa-star text-orange-400 pr-2 text-xl"></span>
              <span className="fa fa-star text-orange-400 pr-2 text-xl"></span>
              <span className="fa fa-star text-orange-400 pr-2 text-xl"></span>
              <span className="fa fa-star text-orange-400 pr-2 text-xl"></span>
              <span className="fa fa-star border-orange-400 pr-2 text-xl"></span>
            </div>
            <p className="text-center text-[#c13645] font-semibold pt-4">
              Regina Miles
            </p>
            <p className="text-center font-semibold text-lg pt-4 ">Desginer</p>
          </div>
        </div>
      </div>
      <div className="h-[500px] border-[20px] border-[#ededed] rounded-3xl flex flex-row md:flex-col justify-around items-center md:justify-center md:items-center mr-10 max-md:hidden">
        <div className="border-2 border-[#707070] rounded-xl h-[465px] flex flex-row md:flex-col justify-around items-center md:justify-center md:items-center ">
          <div className="flex justify-center items-center">
            <img
              src={testimonial_image}
              alt=""
              className="w-32 lg:w-40 rounded-full border border-[#707070]"
            />
          </div>
          <div>
            <p className="text-center pl-4 lg:pl-10 pr-4 lg:pr-10 pt-5">
              Slate helps you see how many more days you need to work to reach
              your financial goal for the month and year.
            </p>
            <div className="mt-4 text-center">
              <span className="fa fa-star text-orange-400 pr-2 text-xl"></span>
              <span className="fa fa-star text-orange-400 pr-2 text-xl"></span>
              <span className="fa fa-star text-orange-400 pr-2 text-xl"></span>
              <span className="fa fa-star text-orange-400 pr-2 text-xl"></span>
              <span className="fa fa-star border-orange-400 pr-2 text-xl"></span>
            </div>
            <p className="text-center text-[#c13645] font-semibold pt-4">
              Regina Miles
            </p>
            <p className="text-center font-semibold text-lg pt-4 ">Desginer</p>
          </div>
        </div>
      </div>

      <div>
        <AiOutlineRight className="text-2xl sm:text-4xl text-[#c13645] " />
      </div>
    </div>
  );
}

export default Testimonials;
