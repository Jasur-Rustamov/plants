import React from "react";

function Prices() {
  return (
    <div>
      <div className="container max-w-screen-xl flex flex-col md:flex-row justify-between py-10 md:py-20 px-4 md:px-0">
        <div className="w-80 md:w-auto mb-10 md:mb-0">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 md:mb-10">
            Prices
          </h3>
          <div className="w-full md:w-80 border rounded-3xl border-[#E3E1D5] flex flex-col items-center">
            <div className="w-64 md:w-60 bg-[#EDF2EC] rounded-3xl flex items-center gap-4 py-2 px-6 cursor-pointer justify-between my-2 md:my-5">
              <h4 className="font-bold">Basics</h4>
              <i className="fa-solid fa-chevron-down text-[#717171] border rounded-full p-1 text-xs"></i>
            </div>
            <div className="w-64 md:w-60 bg-[#EDF2EC] rounded-3xl flex items-center gap-4 py-2 px-6 cursor-pointer justify-between my-2 md:my-5">
              <h4 className="font-bold">Standard</h4>
              <i className="fa-solid fa-chevron-down text-[#717171] border rounded-full p-1 text-xs"></i>
            </div>
            <div className="w-64 md:w-60 bg-[#EDF2EC] rounded-3xl flex items-center gap-4 py-2 px-6 cursor-pointer justify-between my-2 md:my-5">
              <h4 className="font-bold">Pro care</h4>
              <i className="fa-solid fa-chevron-down text-[#717171] border rounded-full p-1 text-xs"></i>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[452px] flex items-end text-right flex-col">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our best <span className="text-primary">gardeners</span> are ready
            to help you
          </h2>
          <div>
            <button className="border-1 border-porange py-1 px-8 rounded cursor-pointer hover:bg-porange transition-all hover:text-white text-porange font-bold my-6 md:my-8">
              Contact us
            </button>
          </div>
          <img
            src="/images/prices.png"
            alt="error"
            className="w-[200px] mx-auto md:w-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Prices;
