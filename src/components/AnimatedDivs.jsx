import React, { useEffect, useState } from "react";
import Skills from "./Skills";
import Skills2 from "./Skills2";
import Skills3 from "./Skills3";

const AnimatedDivs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const divs = [
    <Skills/>,
    <Skills2/>,
    <Skills3/>,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % divs.length);
    }, 3000); // Change every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [divs.length]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative w-full min-h-screen">
        {divs.map((div, index) => (
          <div
            key={index}
            className={`absolute inset-0 scale-105 transition ease-in-out duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            {div}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedDivs;
