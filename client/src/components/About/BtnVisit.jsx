import React from "react";

const BtnVisit = ({ color }) => {
  return (
    <div>
      <button
        className={`rounded-3xl 
          border-4 border-${color} bg-transparent 
          px-6 py-2 text-2xl font-semibold md:text-xl lg:py-4 lg:text-3xl text-${color} 
          ease-in hover:shadow-md hover:ease-out`}
      >
        Visit Here
      </button>
    </div>
  );
};

export default BtnVisit;
