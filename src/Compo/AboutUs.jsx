import React from "react";
import image from "../assets/3.jpg";

const AboutUs = () => {
  return (
    <div className="w-full bg-blue-50 py-12 px-4 md:px-16">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={image}
            alt="About Us"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            About Us
          </h2>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            At <strong>Kamaldev Diecasting Private Limited</strong>, we
            specialize in high-pressure aluminum diecasting solutions,
            delivering precision-engineered components to industries worldwide.
            Trusted by automotive, EV, electronics, and industrial sectors, we
            are committed to quality, innovation, and sustainability.
          </p>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            With state-of-the-art manufacturing facilities and a skilled team,
            we produce complex, high-performance castings that meet the most
            demanding requirements. Our focus on advanced technologies ensures
            cost-effective, reliable, and efficient solutions.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
