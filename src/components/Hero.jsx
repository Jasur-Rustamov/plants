import React from "react";
function Hero() {
  return (
    <div className="bg-[#EDF2EC] text-[#717171]">
      <div className="container max-w-screen-xl mx-auto px-6 md:px-10 lg:px-20 flex flex-col lg:flex-row justify-center lg:justify-between items-center h-[89vh] lg:h-[91vh]">
        <div className="w-full flex justify-center lg:w-auto">
          <img
            src="/images/hero_img.png"
            alt="hero img"
            className="w-[200px] sm:pb-0 sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-auto"
          />
        </div>

        <div className="w-full lg:w-[540px] text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            We grow <span className="text-porange">plants</span> and give you
            oxygen
          </h1>
          <p className="py-6 sm:py-8 md:py-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <button className="border-2 border-porange py-2 px-6 rounded-2xl cursor-pointer hover:bg-porange transition-all hover:text-white text-black">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
}
export default Hero;
