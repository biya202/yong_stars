import React from "react";
import websiteLogo from "../Assets/websiteLogo.png";
import { AiFillCaretRight } from "react-icons/ai";

function Header() {
  return (
    <div className="flex flex-row justify-between pr-4 pl-4 sm:pr-20 sm:pl-20 items-center h-20 bg-gray-100 sticky top-0">
      <div>
        <img src={websiteLogo} alt="" className="w-28 md:w-32" />
      </div>
      <div>
        <button className="cursor-pointer bg-[#c13645] text-sm md:text-base w-36 md:w-44 pt-2 pb-2 text-white rounded-lg lg:ml-32 flex justify-center items-center">
          <span className="pr-3">Book A Session</span>
          <AiFillCaretRight />
        </button>
      </div>
      <div lg={4} className="hidden md:block">
        <div>
          <span className="cursor-pointer text-red-500 mr-8">Features</span>
          <span className="cursor-pointer text-red-500 mr-8">Pricing</span>
          <span className="cursor-pointer text-red-500 ">Support</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
