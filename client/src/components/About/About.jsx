
import FoodProcess from "./FoodProcess";
import LatestNews from "./LatestNews";

const About = () => {
  return (
    <>
      <div className="text-center md:mt-[10rem] lg:mt-[22rem]">
        <img
          src="About/lineDecorator.svg"
          alt="Line Decorator"
          className="absolute mt-24 hidden md:hidden lg:block"
        />
        <img
          src="About/lineDecorator2.svg"
          alt="Line Decorator"
          className="absolute mt-12 block md:mt-24 md:block lg:hidden"
        />
        <div className="lg:-pt-[20rem] md:pt-14">
          <h3 className="text-2xl font-bold md:text-4xl lg:text-5xl ">
            {" "}
            About Our
          </h3>
          <h1 className="text-3xl font-bold md:text-6xl lg:text-8xl">
            Restaurant
          </h1>
        </div>
        {/* resturant description */}
        <div className="relative mx-[2.5rem] mt-10 items-center md:mx-[5rem] md:mt-24 md:flex lg:mx-[15.75rem] lg:mt-24 lg:flex">
          <img
            src="About/restuarant.svg"
            alt="Restuarant"
            className="md:w-[40%] lg:ml-0 md:ml-0 ml-2"
          />

          <div className="text-center md:mx-6 md:text-start lg:mx-12 lg:text-start">
            <h1 className="text-2xl font-semibold text-white md:text-2xl lg:text-6xl">
              Restaurant Name
            </h1>
            <p className="text-white w-[20rem] md:pt-2 lg:w-[46.688rem] lg:pt-8 text-sm lg:text-2xl ">
              “Restaurant”, a business or organization that offers food and
              drink to paying guests, is a word with a long history and many
              different interpretations. Restaurants of one kind or another are
              popular worldwide, generating huge amounts of economic activity.
              In this article, you’ll learn everything you need to know about
              restaurants and the wider food and beverage industry.
            </p>
          </div>
        </div>
        <img
          src="About/visit.svg"
          alt="Visit Our Location"
          className="absolute w-[25rem] md:mx-[11.25rem] md:mt-5 md:w-[35rem] lg:mx-[20.25rem] lg:mt-10 lg:w-[80rem] lg:block md:block hidden"
        />
        <img
          src="About/visitMobile.svg"
          alt="Visit Our Location"
          className="absolute w-[25rem] px-4 lg:hidden md:hidden block "
        />
        <h1 className="relative text-center mt-16 font-bold text-white md:mt-20 md:text-3xl lg:mt-44 lg:text-5xl text-xl">
          Visit Our Restuarant Location
        </h1>
        <img
          src="About/ourSweetGallery.svg"
          alt="Our Sweet Gallery"
          className="mt-80 lg:block md:block hidden"
        />
        <img
          src="About/ourSweetGalleryMobile.svg"
          alt="Our Sweet Gallery"
          className="mt-40 lg:hidden md:hidden block w-full"
        />
      </div>
      <FoodProcess/>
    <LatestNews/>
    </>
  );
};

export default About;
