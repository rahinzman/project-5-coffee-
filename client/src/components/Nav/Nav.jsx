import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import Button from "./Button";
import ButtonTrans from "./ButtonTrans";
import { NavLink } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

const Nav = () => {
  const [MenuClick, setMenuClick] = useState(true);
  let [Unit, setUnit] = useState("hidden");
  const showMenu = () => {
    MenuClick ? setMenuClick(false) : setMenuClick(true);
    MenuClick ? setUnit("block") : setUnit("hidden");
  };
  return (
    <div className="relative z-10 mx-14 flex justify-between pt-5 text-white">
      <div className="">
        <h1 className="text-4xl font-bold ">Logo.</h1>
      </div>
      <div className="flex flex-col items-end lg:block">
        {MenuClick ? (
          <div></div>
        ) : (
          <div className="absolute -mr-14 -mt-5 block h-[100vh] w-[60vh] bg-zinc-50/90 md:hidden lg:hidden"></div>
        )}
        <button className="md:hidden lg:hidden" onClick={showMenu}>
          {MenuClick ? (
            <GiHamburgerMenu className="text-3xl ease-in" />
          ) : (
            <div></div>
          )}
        </button>
        <div
          className={`rounded-lg pr-32 text-black md:mt-2 md:flex md:space-x-8  md:pr-0 md:text-white lg:flex lg:space-x-8 lg:pr-0 lg:text-white ${Unit} absolute mt-10 text-center duration-200
          ease-in md:block lg:relative lg:mt-0 lg:text-end`}
        >
          <div className="absolute -mt-8 ml-56 block md:hidden lg:hidden">
            <AiOutlineClose className="text-3xl" onClick={showMenu} />
          </div>
          <div className="mt-20"></div>
          <NavLink to={"/"}>
            <ButtonTrans text={"Home"}/>
          </NavLink>

          <div className="mt-20"></div>
          <LinkScroll
            activeClass="active"
            to="product"
            smooth={true}
            offset={50}
            duration={400}
          >
            <ButtonTrans
              text={"Products"}
              onClick={() => {
                showMenu();
              }}
            />
          </LinkScroll>

              {/* <div className="mt-20"></div> */}
              
          {/* <NavLink to={"/order"}>
            <ButtonTrans text={"Order"} />
          </NavLink> */}
          <div className="mt-20"></div>
          <LinkScroll
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={50}
            duration={400}
          >
            <ButtonTrans
              text={"About Us"}
              onClick={() => {
                showMenu();
              }}
            />
          </LinkScroll>
          <div className="mt-20"></div>
          <NavLink to={"/login"}>
            <Button text={"Log In"} />
          </NavLink>
          <div className="mt-20"></div>
          <NavLink to={"/signUp"}>
            <Button text={"Sign Up"} />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Nav;
