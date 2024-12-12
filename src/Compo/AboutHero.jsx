import React from "react";
import image1 from "../assets/home.jpeg"; // Background image
import AboutUs from "../Compo/AboutUs";
import ValuesPage from "../Compo/ValuesPage";
import VisionAndMissionPage from "../Compo/VisionMission";
import WhyChooseUs from "../Compo/WhyChooseUs";
import MeetOurTeam from "../Compo/MeetOurTeam";

const HeroSection = () => {
  return (
    <>
      {/* Hero Section as Cover Page */}
      <section
        className="relative bg-cover bg-center h-60 md:h-80 lg:h-[500px] flex items-center justify-center text-center px-4 md:px-8"
        style={{ backgroundImage: `url(${image1})` }}
      >
        {/* Black Opacity Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Text Content */}
        <div className="relative z-10 max-w-4xl text-white space-y-4 md:space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-wide uppercase animate-slide-up">
            About Us
          </h1>
        </div>
      </section>

      {/* Additional Sections */}
      <div id="about" className="space-y-12 md:space-y-16">
        <AboutUs />
        <ValuesPage />
        <VisionAndMissionPage />
        <WhyChooseUs />
        <MeetOurTeam />
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
    </>
  );
};

export default HeroSection;
