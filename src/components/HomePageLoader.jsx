import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
// import robotAnimation from "./robot-welcome.json"; // 👈 put your Lottie JSON here
import robotAnimation from '../loader.json'
import App from "../App";
import FullLayout from "./FullLayout";
export default function HomePageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 sec
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-white">
      {/* Fancy Lottie Preloader */}
      <div
        className={`fixed inset-0 flex flex-col items-center justify-center bg-gray-950 text-white transition-opacity duration-700 z-50 ${
          loading ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="w-96 h-96 mb-4 ">
          <Lottie animationData={robotAnimation} loop={true} />
        </div>
        <h1 className="text-3xl font-bold animate-pulse">
          Welcome to my profile!
        </h1>
      </div>

      {/* Real Page Content */}
      <main >
        <FullLayout/>
      </main>
    </div>
  );
}
