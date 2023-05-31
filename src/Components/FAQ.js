import React, { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";

const FAQ = () => {
  const [isCollapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed(!isCollapsed);
  };

  return (
    <div className="mb-20 mr-4 ml-4 sm:mr-8 sm:ml-8 md:mr-32 md:ml-32 mt-6 md:mt-10">
      <p className="text-[#c13645] max-sm:text-base text-2xl md:text-4xl font-bold mb-14">
        Frequently Asked Questions
      </p>
      <div>
        <div className="border-2 border-[#d9d9d9] flex justify-between p-4">
          <div className="font-bold">Raw denim you probably haven't heard</div>
          <div>
            <AiOutlineRight className="text-2xl " />
          </div>
        </div>
        <div className="border-b-2 border-r-2 border-l-2 border-[#d9d9d9] flex justify-between p-4">
          <div className="font-bold">Williamsburg carles vegan helvetica.</div>
          <div>
            <AiOutlineRight className="text-2xl " />
          </div>
        </div>
        <div className="border-b-2 border-r-2 border-l-2 border-[#d9d9d9] flex flex-col justify-between p-4">
          <div
            className="flex justify-between cursor-pointer text-[#c13645]"
            onClick={toggleCollapse}
          >
            <div className="font-bold ">
              Raw denim you probably haven't heard
            </div>
            <div>
              <AiOutlineRight className="text-2xl " />
            </div>
          </div>
          <div
            className={`${
              isCollapsed ? "hidden" : ""
            } bg-[#d9d9d9] p-4 mt-3 rounded cursor-default`}
          >
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
            skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
            Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
            single-origin coffee nulla assumenda shoreditch et. Nihil anim
            keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
            sapiente ea proident. Ad vegan excepteur butcher vice lomo. craft
            beer farm-to-table, raw denim aesthetic synth nesciunt you probably
            haven't heard accusamus dolores eos qui ratione voluptatem.
          </div>
        </div>
        <div className="border-b-2 border-r-2 border-l-2 border-[#d9d9d9] flex justify-between p-4">
          <div className="font-bold">Raw denim you probably haven't heard</div>
          <div>
            <AiOutlineRight className="text-2xl " />
          </div>
        </div>
        <div className="border-b-2 border-r-2 border-l-2 border-[#d9d9d9] flex justify-between p-4">
          <div className="font-bold">Raw denim you probably haven't heard</div>
          <div>
            <AiOutlineRight className="text-2xl " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
