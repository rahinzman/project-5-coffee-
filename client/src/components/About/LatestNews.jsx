

const LatestNews = () => {
  return (
    <div>
      <img
        src="About/latestNews.svg"
        alt="Latest News"
        className="absolute hidden md:mx-[2rem] md:block md:w-[92%] lg:mx-[4.25rem] lg:mt-16 lg:block lg:w-[92%]"
      />
      <img
        src="About/latestNewsMobile.svg"
        alt="Latest News"
        className="absolute mx-[2rem] block w-[87%] md:hidden lg:hidden"
      />
      <div className="text-center mt-[3rem] mx-[2rem] md:mx-[10rem] md:mt-24 md:text-start lg:mx-[16rem] lg:mt-24 lg:text-start">
        <h1 className="relative text-2xl font-bold pt-20 md:pt-16 md:text-4xl lg:pt-28 lg:text-8xl lg:leading-[8rem]">
          Get most latest news specially for you.
        </h1>
      </div>
      <div className="relative text-center mt-[20rem] lg:mx-[10rem] md:mx-[10rem] lg:text-end md:text-end md:mt-36 lg:mt-0">
        <input
          type="text"
          placeholder="Your E-mail address"
          className="rounded-lg text-lg w-[20rem] py-1 px-4 md:w-[27rem] md:px-4 md:py-2 lg:w-[38rem] lg:px-10 lg:py-4"
        />
        <button className="-ml-32 w-28 rounded-lg bg-black font-bold text-white md:h-8 lg:mt-[20rem] lg:h-10">
          Subscribe
        </button>
      </div>
      <img
        src="thinLine.svg"
        alt="thinline"
        className="lg:mx-[4.20rem] lg:mt-40 md:mt-40 mt-64"
      />
    </div>
  );
};

export default LatestNews;
