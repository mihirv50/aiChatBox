import React from "react";
import { assets } from "../../assets/assets";

const Searchbar = () => {
  return (
    <div className="w-full mt-36 max-w-[900px] mx-auto">
      <div className="flex items-center justify-between  border-zinc-400 p-6 gap-4 bg-[#f0f4f9] outline-none rounded-full">
        <input className="bg-transparent border-none outline-none text-gray-600" type="text" placeholder="Enter a prompt here" />
        <div className="flex gap-4">
          <img className="w-8 object-cover cursor-pointer" src={assets.gallery_icon} alt="" />
          <img className="w-8 object-cover cursor-pointer" src={assets.mic_icon} alt="" />
          <img className="w-8 object-cover cursor-pointer" src={assets.send_icon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
