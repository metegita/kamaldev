import React from "react";
import image1 from "../assets/home.jpeg"; // Back
import ProductsCart from "../Compo/ProductsCart";
import ServicesAndTech from "../Compo/ServicesAndTech";

const HeroSection = () => {
  return <>
    <section
      className="relative bg-cover bg-center h-60 flex items-center justify-between px-10"
      style={{ backgroundImage: `url(${image1})` }}
    >
      {/* Black Opacity Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Text Content */}
      <div className="relative z-10 w-1/2 text-white space-y-6">
        <h1 className="text-6xl font-extrabold tracking-wide">
          Services
        </h1>
        
      </div>

      
    </section>
    <ProductsCart/>
      {/* <EcoFriendlyCards/> */}
      <ServicesAndTech/>
      
  </>
};

export default HeroSection;
