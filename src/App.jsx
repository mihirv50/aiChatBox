import React from "react";
import Sidebar from "./Components/sidebar/Sidebar";
import Hero from "./Components/main/Hero";

const App = () => {
  return (
    <>
      <div className="w-screen h-screen flex">
        <Sidebar />
        <Hero />
      </div>
    </>
  );
};

export default App;
