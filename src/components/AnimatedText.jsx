import React, { useEffect, useState } from 'react';

const titles = ["FrontEnd Developer", "BackEnd Developer", "MERN  Developer", "React Native Learner"];

const AnimatedText = () => {
  const [index, setIndex] = useState(0);
  const [animateKey, setAnimateKey] = useState(0); // To retrigger animation

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
      setAnimateKey((prev) => prev + 1); // Change key to retrigger animation
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-3xl font-bold  w-full">
      I am a{" "}
      <span
        key={animateKey}
        className="inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-fadeInScale"
      >
        {titles[index]}
      </span>
    </div>
  );
};

export default AnimatedText;
