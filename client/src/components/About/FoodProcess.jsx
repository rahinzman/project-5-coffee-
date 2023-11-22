import React from "react";
import BtnVisit from "./BtnVisit";

const FoodProcess = () => {
  return (
    <>
      <div className="mt-32 hidden md:block lg:block">
        <img src="About/howWeMake.svg" alt="How We Make" />
        <img src="rectangle.svg" className="absolute lg:w-[110rem] md:w-[58rem] lg:mx-[4.25rem] md:mx-[2rem] mt-16" />
        <div className="relative lg:mt-[7rem] md:mt-[5.5rem] text-center">
          <BtnVisit color={"white"} />
          <img
            src="About/howWeMake2.svg"
            alt="how We Make"
            className="lg:mx-72 md:mx-36 lg:-mt-12 lg:w-[70%] md:w-[70%]"
          />
        </div>
      </div>
      <div className=" md:hidden lg:hidden flex flex-col gap-10 items-center justify-center">
        <img
          src="About/howWeMakeMobile.svg"
          alt="How We Make"
          className=" mt-20 w-full"
        />
          <BtnVisit color={"black"}/>
        
      </div>
    </>
  );
};

export default FoodProcess;
