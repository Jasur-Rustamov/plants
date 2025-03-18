import React from "react";

function Professional() {
  return (
    <div className="container max-w-screen-xl mx-auto px-6 md:px-10 lg:px-20 flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between h-auto lg:h-[666px]">
      <div className="w-full mb-10 lg:mb-0 lg:w-[605px] text-center lg:text-left mt-10 lg:mt-0">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-primary mb-6 sm:mb-10">
          We are <span className="text-porange">professional experienced</span>{" "}
          gardeners
        </h2>
        <p className="text-[#636060]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>

      <div className="w-full flex justify-center lg:w-auto">
        <img
          src="public/images/houseplant 1.png"
          alt="error"
          className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-auto"
        />
      </div>
    </div>
  );
}

export default Professional;
