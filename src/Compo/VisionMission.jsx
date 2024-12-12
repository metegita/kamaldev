import React from "react";
import bgImage from "../assets/logo 3d.jpg"; // Replace with your actual image path

const VisionAndMissionPage = () => {
  return (
    <div
      className=" min-h-screen w-full bg-cover bg-fixed"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-50">
        <div className="text-left text-white px-6 py-12 sm:px-12 lg:px-20">
          <h2 className="text-3xl font-bold mb-6 animate-fade-in">
            Our Vision and Mission
          </h2>
          <div className="max-w-4xl mx-auto">
            {/* Vision Statement Section */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-3">Vision Statement</h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                “To be the global leader in Aluminum Die-casting, setting new
                standards in precision, innovation, and sustainability. We aim
                to redefine the future of mobility by delivering world-class
                solutions that drive advancements in the electric vehicle (EV)
                sector and beyond."
              </p>
            </div>

            {/* Mission Statement Section */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Mission Statement</h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                “Our mission is to provide exceptional diecasting solutions that
                empower industries to achieve superior performance and
                sustainability. We are committed to integrating cutting-edge
                technologies such as automation, robotics, and artificial
                intelligence with eco-friendly practices to deliver high-quality
                products. Through a customer-centric approach, we aim to foster
                a culture of innovation and operational excellence, shaping the
                future of mobility and advancing global industrial standards."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionAndMissionPage;
