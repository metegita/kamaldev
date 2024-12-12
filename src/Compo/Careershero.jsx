import React from "react";
import image1 from "../assets/home.jpeg"; // Background
import Careers from "../Compo/Careers";
import Contact from "../Compo/Contact";

const HeroSection = () => {
  return (
    <>
      {/* Hero Section as Cover Page */}
      <section
        className="relative bg-cover bg-center h-60 flex items-center justify-center text-center px-6"
        style={{ backgroundImage: `url(${image1})` }}
      >
        {/* Black Opacity Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Text Content */}
        <div className="relative z-10 max-w-4xl text-white space-y-6 animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-wide uppercase animate-slide-up">
            Carriers</h1>
        
        
          </div>
        
      </section>

      {/* Additional Sections */}
      <div id="about">
        
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes slideUp {
            from {
              transform: translateY(50px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }

          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          .animate-fade-in {
            animation: fadeIn 1.5s ease-out;
          }

          .animate-slide-up {
            animation: slideUp 1.2s ease-out;
          }

          .animate-fade-in-delay {
            animation: fadeIn 1.5s ease-out 0.5s forwards;
            opacity: 0;
          }

          .animate-bounce {
            animation: bounce 2s infinite;
          }
        `}
      </style>
      <Careers/>
      <Contact/>
    </>
  );
};

export default HeroSection;
