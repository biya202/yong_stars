import React from "react";
import websiteLogo from "../Assets/websiteLogo.png";
import Instagram from "../Assets/Instagram.png";
import Snapchat from "../Assets/Snapchat.png";

function Footer() {
  return (
    <div className="bg-[#d9d9d9] pt-10 md:pt-20 pb-10 md:pb-20 pr-4 pl-4 sm:pr-8 sm:pl-8 md:pr-14 md:pl-14 flex justify-around">
      <div className="max-lg:flex max-lg:justify-evenly max-lg:items-center">
        <div className="flex max-sm:mr-6 max-lg:mr-20">
          <img src={websiteLogo} alt="" className="w-40 md:w-60" />
        </div>
        <div className="flex lg:mt-10">
          <img
            src={Instagram}
            alt=""
            className="md:w-16 w-10 h-10 md:h-16 mr-10"
          />
          <img src={Snapchat} alt="" className="md:w-16 w-10 h-10 md:h-16" />
        </div>
      </div>
      <div className="max-lg:hidden">
        <div className="cursor-default mt-2 font-semibold text-white text-xl">
          Pages
        </div>
        <div className="cursor-pointer mt-2 font-semibold text-white">Home</div>
        <div className="cursor-pointer mt-2 font-semibold text-white">
          Product
        </div>
        <div className="cursor-pointer mt-2 font-semibold text-white">
          Pricing
        </div>
        <div className="cursor-pointer mt-2 font-semibold text-white">
          About
        </div>
        <div className="cursor-pointer mt-2 font-semibold text-white">
          Contact
        </div>
      </div>
      <div className="max-lg:hidden">
        <div className="cursor-default  mt-2 font-semibold text-white text-xl">
          Tomothy
        </div>
        <div className="cursor-pointer mt-2 font-semibold text-white">
          Elenovr Edwards
        </div>
        <div className="cursor-pointer mt-2 font-semibold text-white">
          Ted Roberston
        </div>
        <div className="cursor-pointer mt-2 font-semibold text-white">
          Annette
        </div>
        <div className="cursor-pointer mt-2 font-semibold text-white">
          Russell
        </div>
        <div className="cursor-pointer mt-2 font-semibold text-white">
          Jinnie Mckinney
        </div>
        <div className="cursor-pointer mt-2 font-semibold text-white">
          Golria Richard
        </div>
      </div>
      <div className="max-lg:hidden">
        <div className="cursor-default  mt-2 font-semibold text-white text-xl">
          Jane Black
        </div>
        <div className="cursor-pointer mt-2 font-semibold text-white">
          Jane Black
        </div>
        <div className="cursor-pointer mt-2 font-semibold text-white">
          Product
        </div>
        <div className="cursor-pointer mt-2 font-semibold text-white">
          Colleen Russell
        </div>
        <div className="cursor-pointer mt-2 font-semibold text-white">
          Colleen Russell
        </div>
        <div className="cursor-pointer mt-2 font-semibold text-white">
          Bruce Simmions
        </div>
      </div>
      <div className="max-lg:hidden">
        <div className="cursor-default  mt-2 font-semibold text-white text-xl">
          Bruce Simmions
        </div>
        <div className="cursor-pointer mt-2 font-semibold text-white">
          Jenniee Copper
        </div>
        <div className="cursor-pointer mt-2 font-semibold text-white">
          Julie Henry
        </div>
        <div className="cursor-pointer mt-2 font-semibold text-white">
          Johnny Murphy
        </div>
        <div className="cursor-pointer mt-2 font-semibold text-white">
          Johnny Murphy
        </div>
        <div className="cursor-pointer mt-2 font-semibold text-white">
          Marvin Mckinney
        </div>
                  
      </div>
    </div>
  );
}

export default Footer;
