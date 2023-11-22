import { BsArrowLeftCircle } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const BackBtn = () => {
  return (
    <div>
      <NavLink to={"/"}>
        <button className="flex items-center gap-2 rounded-full bg-black px-3 py-1 text-lg text-white md:text-2xl">
          <BsArrowLeftCircle />
          Back
        </button>
      </NavLink>
    </div>
  );
};

export default BackBtn;
