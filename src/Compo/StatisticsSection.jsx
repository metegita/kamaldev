import React from "react";

const StatisticsSection = () => {
  return (
    <section className="py-16 bg-blue-50 text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-blue-600 mb-8">
          Our Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Statistic 1 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-6xl font-bold text-blue-700 mb-2">500+</h3>
            <p className="text-lg text-gray-700 font-medium">
              Tons of Production
            </p>
          </div>

          {/* Statistic 2 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-6xl font-bold text-blue-700 mb-2">250+</h3>
            <p className="text-lg text-gray-700 font-medium">
              Global Clients
            </p>
          </div>

          {/* Statistic 3 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-6xl font-bold text-blue-700 mb-2">1000+</h3>
            <p className="text-lg text-gray-700 font-medium">
              Projects Completed
            </p>
          </div>

          {/* Statistic 4 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-6xl font-bold text-blue-700 mb-2">20+</h3>
            <p className="text-lg text-gray-700 font-medium">
              Years of Excellence
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
