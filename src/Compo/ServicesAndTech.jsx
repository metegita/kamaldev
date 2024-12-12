import React from 'react';
import { Link } from 'react-router-dom';
import image from "../assets/homebg.jpeg";
import image2 from "../assets/4.jpg";

import image3 from "../assets/6.jpg";

import image4 from "../assets/homebg1.jpeg";


const ServicesFirst = () => {
  return (
    <>
      <section className="w-full mx-auto py-10 bg-gray-50 dark:bg-gray-900 dark:text-white">
        <div className="w-full h-full flex flex-col items-center md:py-4 py-10">

          {/* Custom Die Casting Solutions */}
          <div className="xl:w-[80%] sm:w-[85%] w-[90%] mx-auto flex md:flex-row flex-col lg:gap-4 gap-2 justify-center lg:items-stretch md:items-center mt-4">
            <img
              className="md:w-[50%] w-full md:rounded-t-lg rounded-sm"
              src={image}
              alt="Custom Die Casting Solutions"
            />
            <div className="md:w-[50%] w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-400 md:p-4 p-0 rounded-md">
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Comprehensive Quality Control</h2>
              <p className="text-md mt-4">
            
                  We employ rigorous quality control standards at every stage of the production process. From material selection to final inspection, our team ensures that every aluminum die casting meets the highest industry standards for durability and performance.
                </p>
              <p className="text-md mt-4">
                <strong>Key benefits include:</strong>
                <ul className="list-disc ml-5 mt-2">
                  <li>Custom-made designs for unique requirements</li>
                  <li>High-quality materials for long-lasting performance</li>
                  <li>Cost-effective manufacturing without compromising on quality</li>
                  <li>Innovative design to optimize function and aesthetics</li>
                  <li>Flexible production to meet both small and large-scale needs</li>
                </ul>
              </p>
              {/* More Information Button */}
              <div className="mt-6 text-center">
                <Link to="/contact">
                  <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
                    More Information
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Prototyping and R&D Support */}
          <div className="xl:w-[80%] sm:w-[85%] w-[90%] mx-auto flex md:flex-row flex-col  lg:gap-4 gap-2 justify-center lg:items-stretch md:items-center mt-6">
            <div className="md:w-[50%] w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-400 md:p-4 p-0 rounded-md">
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Prototyping and R&D Support</h2>
              <p className="text-md mt-4">
                Our prototyping and R&D services are designed to help you bring your ideas to life. With cutting-edge technology and expert engineers, we offer rapid prototyping, material selection, and testing to ensure your product works perfectly before full production. 
                Whether you're developing a new product or refining an existing design, we provide the support you need to turn concepts into reality.
              </p>
              <p className="text-md mt-4">
                <strong>Key benefits include:</strong>
                <ul className="list-disc ml-5 mt-2">
                  <li>Faster time to market with rapid prototyping</li>
                  <li>Test and optimize designs for performance and manufacturability</li>
                  <li>Collaborative approach to innovation and problem-solving</li>
                  <li>Extensive material knowledge for best-suited applications</li>
                  <li>Thorough testing to ensure functionality and durability</li>
                </ul>
              </p>
              {/* More Information Button */}
              <div className="mt-6 text-center">
                <Link to="/contact">
                  <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
                    More Information
                  </button>
                </Link>
              </div>
            </div>
            <img
              className="md:w-[50%] w-full md:rounded-t-lg rounded-sm"
              src={image2}
              alt="Prototyping and R&D Support"
            />
          </div>

          {/* Post Production Services */}
          <div className="xl:w-[80%] sm:w-[85%] w-[90%] mx-auto flex md:flex-row flex-col lg:gap-4 gap-2 justify-center lg:items-stretch md:items-center mt-6">
            <img
              className="md:w-[50%] w-full md:rounded-t-lg rounded-sm"
              src={image3}
              alt="Post Production Services"
            />
            <div className="md:w-[50%] w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-400 md:p-4 p-0 rounded-md">
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Post Production Services</h2>
              <p className="text-md mt-4">
                Our post-production services include finishing, machining, assembly, and testing, ensuring your die-cast products are ready for use with the highest quality standards. From surface treatments to packaging, we ensure that every part is finished to your exact specifications.
              </p>
              <p className="text-md mt-4">
                <strong>Key benefits include:</strong>
                <ul className="list-disc ml-5 mt-2">
                  <li>Precise machining for a perfect fit</li>
                  <li>Surface treatments for improved durability and aesthetics</li>
                  <li>Efficient assembly and packaging to reduce lead time</li>
                  <li>Comprehensive quality control to ensure product standards</li>
                  <li>Final inspections to verify product integrity</li>
                </ul>
              </p>
              {/* More Information Button */}
              <div className="mt-6 text-center">
                <Link to="/contact">
                  <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
                    More Information
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Additional Die Casting Services */}
          <div className="xl:w-[80%] sm:w-[85%] w-[90%] mx-auto flex md:flex-row flex-col lg:gap-4 gap-2 justify-center lg:items-stretch md:items-center mt-6">
            {/* Content on the Left */}
            <div className="md:w-[50%] w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-400 md:p-4 p-0 rounded-md">
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Additional Die Casting Services</h2>
              <p className="text-md mt-4">
                In addition to our core services, we offer a range of specialized die casting services including tooling, mold design, and consulting. 
                Our experts guide you through every stage of the production process to ensure a smooth experience and superior results.
              </p>
              <p className="text-md mt-4">
                <strong>Key benefits include:</strong>
                <ul className="list-disc ml-5 mt-2">
                  <li>Comprehensive tool design and fabrication</li>
                  <li>Expert consultation on the best casting methods</li>
                  <li>End-to-end support throughout the manufacturing process</li>
                  <li>Flexible solutions for various industries and applications</li>
                  <li>Dedicated project management for seamless coordination</li>
                </ul>
              </p>
              {/* More Information Button */}
              <div className="mt-6 text-center">
                <Link to="/contact">
                  <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
                    More Information
                  </button>
                </Link>
              </div>
            </div>

            {/* Image on the Right */}
            <img
              className="md:w-[50%] w-full md:rounded-t-lg rounded-sm"
              src={image4}
              alt="Additional Die Casting Services"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesFirst;
