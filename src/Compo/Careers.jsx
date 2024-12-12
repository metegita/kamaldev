import React from "react";
import { motion } from "framer-motion"; // For animations
import { FaTools, FaRobot, FaUsers, FaChalkboardTeacher } from "react-icons/fa"; // Icons for sections
import TitleSection from "../Compo/TitleSection"; // Import TitleSection

const Careers = () => {
  // Animation variants for sections
  const fadeUpVariants = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      {/* Title Section */}
      <TitleSection />

      <section className="bg-gray-100 text-gray-800 py-16 px-4 md:px-16">
        {/* Content Wrapper */}
        <div className="container mx-auto">

          {/* Commitments Section (2x2 Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Card 1 */}
            <motion.div
              className="flex items-center text-left p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeUpVariants}
            >
              <FaChalkboardTeacher className="text-blue-500 text-5xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Continuous Learning</h3>
                <p className="text-gray-600">
                  Enhance your skills with ongoing training, certifications, and leadership programs.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="flex items-center text-left p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeUpVariants}
            >
              <FaUsers className="text-green-500 text-5xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Nurturing Talent</h3>
                <p className="text-gray-600">
                  Opportunities for personal and professional growth to unlock your full potential.
                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="flex items-center text-left p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeUpVariants}
            >
              <FaRobot className="text-purple-500 text-5xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Cutting-Edge Practices</h3>
                <p className="text-gray-600">
                  Work with automation, robotics, and advanced manufacturing tools.
                </p>
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              className="flex items-center text-left p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeUpVariants}
            >
              <FaTools className="text-yellow-500 text-5xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Culture of Excellence</h3>
                <p className="text-gray-600">
                  Build accountability, innovation, and quality in everything you do.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Openings Section */}
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Current Job Openings</h3>
            <p className="text-gray-600">
              Explore roles in engineering, manufacturing, technology, and more.
            </p>
          </div>

          {/* Job Openings Table */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-blue-500 text-white">
                <tr>
                  <th className="py-3 px-6">Position</th>
                  <th className="py-3 px-6">Department</th>
                  <th className="py-3 px-6">Location</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-100">
                  <td className="py-4 px-6">Production Engineer</td>
                  <td className="py-4 px-6">Engineering</td>
                  <td className="py-4 px-6">Pune, India</td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="py-4 px-6">Quality Assurance Specialist</td>
                  <td className="py-4 px-6">Manufacturing</td>
                  <td className="py-4 px-6">Pune, India</td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="py-4 px-6">Automation Technician</td>
                  <td className="py-4 px-6">Technology</td>
                  <td className="py-4 px-6">Remote</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;
