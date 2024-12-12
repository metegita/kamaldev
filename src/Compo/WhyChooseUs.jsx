import React, { useEffect } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles

const WhyChooseUs = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Animation easing
      once: true, // Trigger animation once when scrolled into view
    });
  }, []);

  const reasons = [
    {
      title: "Next-Generation Technology",
      description:
        "We use state-of-the-art diecasting equipment, automation, and AI-driven systems to deliver superior quality products.",
    },
    {
      title: "Industry Expertise",
      description:
        "While new, our leadership team brings years of expertise in manufacturing and a clear vision for the future.",
    },
    {
      title: "Custom Solutions",
      description:
        "Tailored diecasting solutions to meet the specific needs of the automotive and EV sectors.",
    },
    {
      title: "Sustainability Commitment",
      description:
        "Our operations prioritize recycling, energy efficiency, and green manufacturing processes.",
    },
    {
      title: "Global Aspirations",
      description:
        "With a focus on the rapidly growing EV market, we aim to build a brand that resonates worldwide.",
    },
  ];

  return (
    <div className="bg-gray-50 py-20 px-6 sm:px-12 lg:px-20">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-black mb-4">Why Choose Us?</h2>
        <p className="text-lg text-gray-600">
          Discover why we are the preferred choice for diecasting solutions in the automotive and EV industries.
        </p>
      </div>

      {/* Vertical Timeline Section */}
      <div className="relative">
        <div className="absolute left-1/2 w-1 bg-gray-300 h-full -translate-x-1/2"></div>
        <div className="space-y-12">
          {reasons.map((reason, index) => {
            return (
              <div
                key={index}
                data-aos="fade-up" // Add fade-up animation
                data-aos-duration="1000" // Customize duration
                className="flex items-center space-x-6"
              >
                {/* Left Circle with Icon */}
                <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-indigo-800">
                  <CheckCircleIcon className="w-4 h-4" />
                </div>

                {/* Content */}
                <div className="flex-1 bg-indigo-50 p-6 rounded-lg shadow-md hover:bg-indigo-100 transform transition-all duration-300 hover:scale-105">
                  <h3 className="text-xl font-semibold text-black mb-4 hover:text-indigo-700">{reason.title}</h3>
                  <p className="text-lg text-gray-600">{reason.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
