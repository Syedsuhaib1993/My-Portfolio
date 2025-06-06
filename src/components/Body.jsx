import React from "react";
import Navbar from "./Navbar";
import imghero from '/imghero.png'
import facebook from '/facebook.png'
import github from '/github.png'
import instagram from '/instagram.png'
import linkedin from '/linkedin.png'
import Suhaib from '/Suhaib.pdf'

const Body = () => {
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[600px] flex flex-col items-center">
      <div
        className="md:h-[550px] h-[500px] w-[450px] bg-gradient-to-r absolute from-[#6d2897] via-[#8e6cf5] 
      to-[#bb61c5] transform rotate-45 z-0 right-2 top-28 rounded-3xl"
      ></div>
      <Navbar />
      <main
        id="home"
        className="flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-52 pb-4 md:pb-24 md:pt-32 pt-24 mt-14 md:mt-0 z-10"
      >
        <section
          className="flex-1 mr-28 md:text-left mt-10 md:mt-0 relative"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="absolute -z-10 w-60 h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 -left-12"></div>
          <header>
            <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold text-white mb-">
              Syed Suhaib
            </h1>
            <h2 className="text-xl sm:text-4xl md:text-2xl font-bold text-[#3e0f4a] md:text-[#c744ec] mb-2">
              Frontend Developer
            </h2>
          </header>
          <p className="text-base sm:text-lg md:text-lg text-gray-200 mb-6">
            I am effective frontend developer with a strong eye for design
             with technical expertise to deliver seamless user experiences across the web.
          </p>
          <div className="flex items-center space-x-4 mb-6">
              <a href="https://chatgpt.com/c/6836b806-bc6c-8009-91b3-833559d98ed1">
                <img src={linkedin} alt="linkedin" className="w-11 h-11"/>
              </a>
              <a href="#">
                <img src={github} alt="github" className="w-11 h-11"/>
              </a>
              <a href="#">
                <img src={facebook} alt="facebook" className="w-11 h-11"/>
              </a>
              <a href="#">
                <img src={instagram} alt="instagram" className="w-11 h-11"/>
              </a>
          </div>
          <a href={Suhaib} download>
            <button className="inline-flex text-white border-2 px-6 focus:outline-none hover:bg-[#801b9c]
            hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-lg">
              Download CV
            </button>
          </a>
        </section>
        <figure data-aos='fade-up' data-aos-delay='500' className="flex-1 flex justify-center md:justify-end mt-0" >
          <img src={imghero} alt="Hero Image" 
          className="h-[300px] sm:h-[400px] md:h-[485px] w-[250px] sm:w-[480px] object-cover rounded-lg"/>
        </figure>
      </main>
    </div>
  );
};

export default Body;