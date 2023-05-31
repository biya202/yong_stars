import React from "react";
import YoungStarsMissionImage from "../Assets/Young Stars Mission.png";

function YoungStarsMission() {
  return (
    <div className="bg-[#d9d9d9] ">
      <div className="pt-10 pb-10 mr-4 ml-4 sm:mr-8 sm:ml-8 md:mr-14 md:ml-14 flex flex-row justify-between items-center ">
        <div className="w-[65%]">
          <p className="font-black text-xl xs:text-3xl sm:text-4xl text-[#c13645]">
            Young Stars Mission
          </p>
          <p className="font-semibold sm:font-bold text-xs sm:text-base mt-5 leading-[1.5] md:leading-[2]">
            Welcome to Young Stars Labs, the premier training academy for
            tomorrows innovators accepting all ages from 6 to 18. Our
            comprehensive program offers training in programming, robotics, and
            AI through engaging and hands-on activities. With personalized
            attention from our experienced instructors, children develop
            valuable technical skills and a passion for technology. Enrolling
            your child in Young Stars Labs gives them a head start in the world
            of technology and opens up endless opportunities for their future
            education and career. Sign up for our starting classes now and help
            your child unlock their full potential at Young Stars Labs!
          </p>
        </div>
        <div className="w-[35%] flex justify-center">
          <img
            src={YoungStarsMissionImage}
            className="h-[300px] w-[300px]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default YoungStarsMission;
