import React from 'react';
import { FaCarBattery, FaCarAlt, FaCogs, FaChargingStation } from 'react-icons/fa'; // Importing Icons

const ProductsCart = () => {
  return (
    <div className="p-5 pt-8 border border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-800">
      <h1 className="text-2xl font-bold text-center text-blue-700 mb-8">
        Our High-Performance Products
      </h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Cart 1: Battery Housing */}
        <div className="group relative flex flex-col items-center justify-center p-6 rounded-xl border border-blue-500 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
          <FaCarBattery className="text-blue-700 text-4xl mb-4" />
          <h2 className="text-lg font-semibold text-center text-black">Battery Housing</h2>
          <p className="text-sm text-gray-600 text-center mt-2">For Electric Vehicle</p>
        </div>

        {/* Cart 2: Motor Casing */}
        <div className="group relative flex flex-col items-center justify-center p-6 rounded-xl border border-green-500 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
          <FaCarAlt className="text-green-700 text-4xl mb-4" />
          <h2 className="text-lg font-semibold text-center text-black">Motor Casing</h2>
          <p className="text-sm text-gray-600 text-center mt-2">For Electric Vehicle</p>
        </div>

        {/* Cart 3: Controller Housing */}
        <div className="group relative flex flex-col items-center justify-center p-6 rounded-xl border border-red-500 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
          <FaCogs className="text-red-700 text-4xl mb-4" />
          <h2 className="text-lg font-semibold text-center text-black">Controller Housing</h2>
          <p className="text-sm text-gray-600 text-center mt-2">For Electric Vehicle</p>
        </div>

        {/* Cart 4: Other Components */}
        <div className="group relative flex flex-col items-center justify-center p-6 rounded-xl border border-yellow-500 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
          <FaChargingStation className="text-yellow-700 text-4xl mb-4" />
          <h2 className="text-lg font-semibold text-center text-black">
            High-Performance Components
          </h2>
          <p className="text-sm text-gray-600 text-center mt-2">Automotive Sector</p>
        </div>
      </div>
    </div>
  );
};

export default ProductsCart;
