import { Rating } from "@mui/material";

const ProductCard = ({ imgSrc, imgTxt, price, desc, time, rating }) => {
  return (
    <div className="relative lg:w-full md:w-full w-[329px]">
      <img src={imgSrc} alt={imgTxt} />
      <div className=" bg-black rounded-b-3xl lg:w-[392px] md:w-[392px] w-[329px] h-[150px] text-white">
        <div className="px-5 pt-3">
          {/* for Price and Heading */}
          <div className="flex justify-between items-center  ">
            <div className="lg:text-3xl md:text-3xl text-xl lg:font-medium md:font-medium font-bold">{imgTxt}</div>
            <div className="lg:text-4xl md:text-4xl text-3xl font-semibold">{price}</div>
          </div>
          {/* for description and time */}
          <div className="flex justify-between items-center ">
            <div className="w-[155px] text-sm">{desc}</div>
            <div className="flex items-center">
              <img src="icons/timeIcon.svg" alt="time" className="w-15 px-2 " />
              <div className="text-sm">{time}</div>
              <div className="text-xs">min</div>
            </div>
          </div>
          {/* rating and add to order */}
          <div className="flex justify-between items-center">
            <div className="rating flex items-center">
              <p className="text-2xl pr-3 ">{rating.toFixed(1)}</p>
              <Rating name="read-only" value={rating} readOnly />
            </div>
            <button
              className="rounded-xl 
              bg-white
              text-black font-extrabold px-3
              shadow-md
              text-sm
              h-8 
              "
            >
              Add to order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
