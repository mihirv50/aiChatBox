import React from "react";
import Topnav from "./Topnav";
import { assets } from "../../assets/assets";
import Searchbar from "./Searchbar";

const Hero = () => {
  const cardData = [
    {
      title: "Suggest beautiful places to see on an upcoming road trip",
      icon: `${assets.compass_icon}`,
    },
    {
      title: "Briefly summarize this concept: urban planning",
      icon: `${assets.bulb_icon}`,
    },
    {
      title: "Brainstorm team bonding activities for our work retreat",
      icon: `${assets.message_icon}`,
    },
    {
      title: "Tell me about React js and React native",
      icon: `${assets.code_icon}`,
    },
  ];
  return (
    <div className="w-full h-full p-6">
      <div className="w-full h-[7vh]">
        <Topnav />
      </div>
      <div className="main mt-10 max-w-[900px] mx-auto">
        <div className="greeting text-6xl text-[#c4c7c5]">
          <p>
            <span className="bg-gradient-to-r from-[#4b90ff] to-[#ff5546] bg-clip-text text-transparent">
              Hello, Dev.
            </span>
          </p>
          <p className="">How can i help you today?</p>
        </div>
        <div className="cards grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-4 mt-42">
          {cardData.map((c, i) => (
            <div
              key={i}
              className="card bg-[#f0f4f9] h-[200px] p-[15px] text-gray-600 rounded-lg relative cursor-pointer hover:bg-[#dfe4ea] duration-300"
            >
              <p className="font-medium">{c.title}</p>
              <img
                className="absolute w-8 bottom-4 right-4"
                src={c.icon}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>

      <Searchbar />
    </div>
  );
};

export default Hero;
