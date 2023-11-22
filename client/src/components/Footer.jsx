import React from "react";
import {
  BsFacebook,
  BsTwitter,
  BsGithub,
  BsYoutube,
  BsInstagram,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div className="lg:mx-[5rem] md:mx-[2rem] mx-[2.5rem] lg:flex md:flex justify-between">
      <div className="flex-col justify-between mt-24">
        <h1 className="lg:text-4xl md:text-3xl text-5xl font-bold ">Coffee Shop .</h1>
        <div className="flex gap-6 lg:py-16 md:py-16 py-10 text-[#5f615f]">
          <BsFacebook className="lg:text-3xl md:text-2xl text-4xl" />
          <BsInstagram className="lg:text-3xl md:text-2xl text-4xl" />
          <BsTwitter className="lg:text-3xl md:text-2xl text-4xl" />
          <BsGithub className="lg:text-3xl md:text-2xl text-4xl" />
          <BsYoutube className="lg:text-3xl md:text-2xl text-4xl" />
        </div>
      </div>
      <div className="my-20 lg:flex md:flex lg:gap-56 md:gap-28">
        <div className="flex-col ">
          <h1 className="lg:text-4xl md:text-3xl text-5xl font-semibold">Resourses</h1>
          <div  className="lg:py-16 md:py-16 py-10">
            <h4 className="lg:text-2xl md:text-xl text-3xl text-[#5f615f]">Coffee Shop</h4>
            <h4 className="lg:text-2xl md:text-xl text-3xl py-2 text-[#5f615f]">Tailwind CSS</h4>
          </div>
        </div>
        <div className="flex-col ">
          <div>
            <h1 className="lg:text-4xl md:text-3xl text-5xl font-semibold">Follow Us</h1>
            <div className="lg:py-16 md:py-16 py-10">
              <h4 className="lg:text-2xl md:text-xl text-3xl text-[#5f615f]">Github</h4>
              <h4 className="lg:text-2xl md:text-xl text-3xl py-2 text-[#5f615f]">Discord</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
