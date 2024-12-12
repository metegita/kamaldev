import React from 'react';
import { FaRegClipboard, FaTools, FaShieldAlt, FaUsers } from 'react-icons/fa';

const SafetyCommitment = () => {
  return (
    <section className="py-16 bg-blue-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black-700 dark:text-blue-400 mb-4 uppercase">
            Our Commitment to Safety
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Ensuring a safe, secure, and efficient environment with advanced measures and best practices.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Adhering to Standards */}
          <div className="relative group p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
            <FaRegClipboard className="text-blue-600 text-5xl mb-4 group-hover:scale-110 transition-all duration-300" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Adhering to Standards</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Complying with all industry safety regulations to ensure a hazard-free workplace.
            </p>
          </div>

          {/* Card 2: Continuous Training */}
          <div className="relative group p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
            <FaUsers className="text-green-600 text-5xl mb-4 group-hover:scale-110 transition-all duration-300" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Continuous Training</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Regularly educating our workforce with tools and knowledge to maintain safety standards.
            </p>
          </div>

          {/* Card 3: Advanced Safety Measures */}
          <div className="relative group p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
            <FaShieldAlt className="text-red-600 text-5xl mb-4 group-hover:scale-110 transition-all duration-300" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Advanced Safety Measures</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Utilizing modern equipment and monitoring systems to enhance safety and reduce risks.
            </p>
          </div>

          {/* Card 4: Proactive Risk Management */}
          <div className="relative group p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
            <FaTools className="text-yellow-600 text-5xl mb-4 group-hover:scale-110 transition-all duration-300" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Proactive Risk Management</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Identifying risks early and implementing proactive measures to ensure safety excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyCommitment;
