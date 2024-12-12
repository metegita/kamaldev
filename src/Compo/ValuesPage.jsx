import React from "react";
import { FaRobot, FaCheckCircle, FaLeaf, FaHandshake } from "react-icons/fa"; // Import React Icons

const ValuesPage = () => {
  return (
    <div className="w-full bg-gray-50 py-12 px-4 md:px-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Values</h2>
        <p className="text-gray-600 text-lg">
          We are driven by principles that shape our commitment to excellence.
        </p>
      </div>

      {/* Values Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Innovation */}
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md border border-transparent hover:border-blue-500 transition duration-300">
          <FaRobot className="text-blue-500 text-5xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Innovation</h3>
          <p className="text-gray-600">
            Embracing advanced technologies like robotics and automation to meet modern industry demands.
          </p>
        </div>

        {/* Quality */}
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md border border-transparent hover:border-blue-500 transition duration-300">
          <FaCheckCircle className="text-green-500 text-5xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality</h3>
          <p className="text-gray-600">
            Precision, reliability, and consistency are the hallmarks of everything we produce.
          </p>
        </div>

        {/* Sustainability */}
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md border border-transparent hover:border-blue-500 transition duration-300">
          <FaLeaf className="text-green-600 text-5xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Sustainability</h3>
          <p className="text-gray-600">
            Committed to minimizing environmental impact through eco-friendly practices.
          </p>
        </div>

        {/* Customer Focus */}
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md border border-transparent hover:border-blue-500 transition duration-300">
          <FaHandshake className="text-yellow-500 text-5xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Customer Focus</h3>
          <p className="text-gray-600">
            Building lasting relationships through trust, transparency, and excellence in service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ValuesPage;
