import React from "react";

const Button = ({ text }) => {
  return (
    <div>
      <button
        className="w-24 rounded-3xl bg-black py-1 font-bold text-white duration-300 
        ease-in hover:bg-black hover:text-white hover:duration-300 hover:ease-in 
        md:bg-white md:text-black lg:bg-white lg:text-black "
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
