import React, { useState } from "react";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const footeritems = [
    { title: "Help", icon: `${assets.question_icon}` },
    { title: "Activity", icon: `${assets.history_icon}` },
    { title: "Settings", icon: `${assets.setting_icon}` },
  ];
  return (
    <div className="max-w-[15%] h-full bg-[#F0F4F9] flex flex-col justify-between p-4">
      <div>
        <div className="top">
          <img onClick={()=>setExtended(!extended)} className="w-7 cursor-pointer" src={assets.menu_icon} alt="" />
        </div>
        <div className="newchat cursor-pointer mt-[50px] flex items-center justify-center gap-4 bg-[#E6EAF1] rounded-full p-1">
          <img className="w-7" src={assets.plus_icon} alt="" />
          {extended ? (
            <p className="text-lg text-gray-600 font-light">New chat</p>
          ) : null}
        </div>
        {extended ? (
          <div className="recent flex flex-col">
            <p className="text-lg font-semibold text-gray-600 mt-[30px] mb-[20px]">
              Recent
            </p>
            <div className="flex items-start gap-2 p-2 rounded-full text-[#282828] cursor-pointer hover:bg-[#E6EAF1] duration-150">
              <img className="w-7" src={assets.message_icon} alt="" />
              <p>what the fuckk...</p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="footer">
        {footeritems.map((f, i) => (
          <div
            key={i}
            className="flex gap-5 my-4 rounded-md items-center hover:bg-[#E6EAF1] duration-150"
          >
            <img className="object-cover w-7 font-light" src={f.icon} alt="" />
            {extended ? (
              <p className="text-xl font-extralight">{f.title}</p>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
