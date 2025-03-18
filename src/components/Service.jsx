import React from "react";

function Service() {
  return (
    <div className="bg-[#EDF2EC] h-auto py-20">
      <div className="container max-w-screen-xl mx-auto px-6 md:px-10 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-20 justify-between items-center">
          <h2 className="text-3xl sm:text-4xl text-primary text-center lg:text-left">
            Service and our <br /> projects
          </h2>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <button className="border-2 border-porange py-2 px-6 rounded cursor-pointer hover:bg-porange transition-all hover:text-white text-porange">
              Gardens
            </button>
            <button className="border-2 border-porange py-2 px-6 rounded cursor-pointer hover:bg-porange transition-all hover:text-white text-porange">
              Lawn
            </button>
            <button className="border-2 border-porange py-2 px-6 rounded cursor-pointer hover:bg-porange transition-all hover:text-white text-porange">
              Planting
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {[
            { img: "gardern.png", title: "Garden care" },
            { img: "planting.png", title: "Planting" },
            { img: "lawn.png", title: "Lawn care" },
            { img: "planting_two.png", title: "Planting" },
            { img: "garden_two.png", title: "Garden care" },
            { img: "planting_three.png", title: "Planting" },
          ].map((item, index) => (
            <div key={index} className="text-center cursor-pointer">
              <img
                className="w-full max-w-[320px] mx-auto"
                src={`/images/${item.img}`}
                alt="error"
              />
              <div className="border border-[#E3E1D5] rounded-b-2xl p-4 w-[320px] mx-auto">
                <h4 className="font-bold text-porange">{item.title}</h4>
                <p className="text-[#717171]">
                  Lorem Ipsum has been the industry
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;
