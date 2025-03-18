import React from "react";

function Contacts() {
  return (
    <div className="bg-[#EDF2EC] py-10">
      <div className="max-w-screen-lg mx-auto px-4">
        <h2 className="text-center font-bold text-4xl text-primary mb-8">
         
          Contact us
        </h2>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-6">
          <img
            src="/images/contact_woman.png"
            alt="Contact"
            className="w-full max-w-xs md:max-w-md" 
          />
          <div className="w-full md:max-w-[450px] h-[50px] bg-[#D6E7D2] rounded shadow shadow-[#00000040] flex items-center gap-4 px-6 cursor-pointer justify-between">
            <h4 className="font-bold text-[#717171]">City</h4>
            <i className="fa-solid fa-chevron-down text-[#717171] border rounded-full p-2 text-sm"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
