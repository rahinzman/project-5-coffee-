import BlackCoffeeDescrip from "./BlackCoffeeDescrip";
import HeaderDescrip from "./HeaderDescrip";
import ShortList from "./ShortList";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectCoverflow } from "swiper/modules";
import About from "../About/About";
import Product from "../Products/Product";
import Slide from "./Slide";
import { Element } from "react-scroll";

const Home = () => {

  return (
    <>
        <img src="eclips2.svg" className="absolute lg:-mt-[92rem] md:-mt-[42rem] hidden lg:block md:block" /> 
        <img src="eclips2.svg" className="absolute lg:mt-[42rem] md:mt-[42rem] mt-[38rem] " />
        <img src="eclips3.svg" className="absolute lg:hidden md:hidden block mt-[47rem] " />
        <img src="eclips3.svg" className="absolute lg:mt-[73rem] md:mt-[80rem] -mt-[10rem]" />
      <HeaderDescrip />

      <div className="z-10 flex items-center justify-center md:mx-10 md:mt-10 lg:mx-20 lg:mt-0 lg:justify-between">
        <div className="hidden md:block lg:block">
          <BlackCoffeeDescrip />
        </div>

        <div className="relative flex justify-center text-center md:-ml-72 lg:ml-0 lg:pr-40 ">
          <div className="lg:block md:block hidden">
            <img
              src="/images/blackCoffee.svg"
              alt="coffee 1"
              className="md:px-20"
            />
            <button className=" font-3xl rounded-lg bg-black p-4 font-bold text-white">
              Buy Now
            </button>
          </div>

          <div className="lg:hidden md:hidden block">
            
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            spaceBetween={-150}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 100,
              depth: 200,
              modifier: 2.5,
            }}
            modules={[EffectCoverflow]}
            className=""
          >
            <SwiperSlide >
              <Slide img={"/images/CuppaccinoBig.svg"} txt={"Cuppaccino"} price={"12.00"}/>
              
            </SwiperSlide>
            <SwiperSlide>
            <Slide img={"/images/blackCoffee2.svg"} txt={"Black Coffee"} price={"12.00"}/>
              
            </SwiperSlide>
            <SwiperSlide>
            <Slide img={"/images/milkTea.svg"} txt={"Milk Tea"} price={"12.00"}/>
              
            </SwiperSlide>
          </Swiper>
          <button className=" font-3xl rounded-lg bg-black p-4 font-bold text-white">
              Buy Now
            </button>
          </div>
        </div>

        <div className="relative -mt-20 hidden flex-col md:-mt-16 md:block lg:block lg:pr-10 ">
          <ShortList imageSrc="images/Cuppuccino.svg" text="Cappuccino" />
          <ShortList imageSrc="images/blackCoffeeSmall.svg" text="Black Coffee"/>
          <ShortList imageSrc="images/ColdBrew.svg" text="Cold Brew" />
          <ShortList imageSrc="images/Moka.svg" text="Moka Pot" />
        </div>
      </div>
      <Element name="product">
          <Product />
        </Element>
          <img src="rectangle.svg" className="absolute lg:block md:block hidden lg:mt-[38rem] lg:mx-[71px] md:mt-[24rem] md:mx-[2rem] lg:w-[110rem] md:w-[58rem]" />
          <img src="rectangleMobile.svg" alt="Rectangle Mobile" className="absolute lg:hidden md:hidden block w-[26rem] px-4 mt-24" />
        <Element name="about">
          <About />
        </Element>
    </>
  );
};

export default Home;
