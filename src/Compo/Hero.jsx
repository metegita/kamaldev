import React, { useEffect } from "react";
import AOS from "aos";
import { Link } from "react-router-dom"; // Import Link component

import "aos/dist/aos.css"; // Import AOS styles
import image1 from "../assets/backbg.png"; // Background image
import image2 from "../assets/4.jpg"; // Side image 1
import image3 from "../assets/7.jpg"; // Side image 2
import image4 from "../assets/5.jpg"; // Side image 3
import image5 from "../assets/home.jpeg"; // Side image 4
import image6 from "../assets/bg3.jpg"; // Side image 5
import './Hero.css';
import Gallery from "../Compo/Gallery";
import EcoFriendlyCards from "../EcoFriendlyCards";
import SafetyCommitment from "../Compo/SafetyCommitment";
import StatisticsSection from "../Compo/StatisticsSection";
const HeroSection = () => {
  // Initialize AOS on mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation happens once
    });
  }, []);

  return (
    <>
      <section
        className="relative bg-cover bg-center h-screen flex items-center px-10"
        style={{ backgroundImage: `url(${image1})` }}
      >
        {/* Black Opacity Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Text Content */}
        <div className="relative z-10 w-1/2 text-white">
          <h1 className="text-5xl font-bold mb-6 motion-safe:animate-text-fade-in">
            KAMALDEV DIECASTING PRIVATE LIMITED
          </h1>
          <p className="text-lg mb-6 leading-relaxed motion-safe:animate-text-slide-up">
            Global Excellence in every Cast
          </p>
         <Link to="/abouthero">
  <button className="mt-4 px-6 py-3 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition duration-300">
    Explore Now
  </button>
</Link>
</div>

        {/* Staggered Grid Layout with Image Animation */}
        <div className="relative z-10 w-1/2 grid grid-cols-3 gap-6 items-center">
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            <img
              src={image2}
              alt="Visual 1"
              className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
              data-aos="fade-right"
            />
            <img
              src={image4}
              alt="Visual 3"
              className="w-full h-auto self-end rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
              data-aos="fade-up"
            />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4">
            <img
              src={image3}
              alt="Visual 2"
              className="w-full h-auto self-center rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
              data-aos="fade-down"
            />
            <img
              src={image5}
              alt="Visual 4"
              className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
              data-aos="fade-left"
            />
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4">
            <img
              src={image6}
              alt="Visual 5"
              className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
              data-aos="fade-right"
            />
            <img
              src={image3}
              alt="Visual 6"
              className="w-full h-auto self-start rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
              data-aos="fade-up"
            />
          </div>
        </div>
      </section>
      <EcoFriendlyCards />
      <StatisticsSection/>
      <Gallery />
      <SafetyCommitment />
    </>
  );
};

export default HeroSection;
