import React from "react";
import Slider from "react-slick";
import { FaRecycle, FaBolt, FaLeaf, FaUsers } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Style.css'; // Import custom styles

const EcoFriendlyCards = () => {
  const commitmentDetails = [
    {
      title: "Resource Efficiency",
      description:
        "Utilizing advanced technologies to optimize material usage, reduce waste, and recycle aluminum effectively within our processes.",
      icon: FaRecycle,
    },
    {
      title: "Energy Conservation",
      description:
        "Adopting energy-efficient equipment and renewable energy sources to lower our carbon footprint.",
      icon: FaBolt,
    },
    {
      title: "Green Innovations",
      description:
        "Investing in sustainable product designs that support the global shift toward electric vehicles and clean energy solutions.",
      icon: FaLeaf,
    },
    {
      title: "Waste Management",
      description:
        "Implementing strict protocols to manage and repurpose industrial waste, ensuring minimal environmental disruption.",
      icon: FaRecycle,
    },
    {
      title: "Employee and Community Awareness",
      description:
        "Promoting environmental consciousness within our workforce and fostering eco-friendly practices within the community.",
      icon: FaUsers,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show 2 slides at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-white py-20 px-6 sm:px-12 lg:px-20">
      {/* Title */}
      <h2 className="text-4xl font-bold text-black700 text-center mb-8">
        Our Commitment to Eco-Friendly Manufacturing
      </h2>

      {/* Carousel */}
      <Slider {...settings}>
        {commitmentDetails.map((commitment, index) => (
          <div key={index} className="carousel-card">
            <div className="p-6 bg-white rounded-lg shadow-lg border-t-4 border-blue-700 transform hover:-translate-y-2 transition duration-500 ease-in-out">
              {/* Icon */}
              <div className="flex items-center justify-center mb-4">
                <commitment.icon className="w-16 h-16 text-blue-700 transition duration-300 transform hover:scale-110" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-black mb-4">
                {commitment.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600">{commitment.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default EcoFriendlyCards;
