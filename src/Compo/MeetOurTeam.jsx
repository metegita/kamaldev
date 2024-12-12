import React from "react";
import { motion } from "framer-motion"; // For animations
import directorImage from "../assets/logo.jpg"; // Replace with actual images
import coDirectorImage from "../assets/logo.jpg";

const MeetOurTeam = () => {
  // Animation variants for cards
  const cardVariants = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="w-full py-16 px-4 md:px-16 bg-blue-50">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Founding Team</h2>
        <p className="text-gray-600 text-lg">
          Leading Kamaldev Diecasting with precision, innovation, and a commitment to excellence.
        </p>
      </div>

      {/* Founding Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Founder and Director */}
        <motion.div
          className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          variants={cardVariants}
        >
          <img
            src={directorImage}
            alt="Pavan Devendra Gaikwad"
            className="w-40 h-40 rounded-full mb-4 object-cover shadow-lg"
          />
          <h3 className="text-2xl font-semibold text-gray-800">Pavan Devendra Gaikwad</h3>
          <p className="text-gray-600 mb-4">(B.E. Production / M.B.A - Operation Management)</p>
          <p className="text-gray-700 leading-relaxed">
            Driven by a passion for precision and innovation, Pavan leads Kamaldev Diecasting to
            deliver exceptional high-pressure diecasting solutions for global industries. Focused on
            quality, sustainability, and industrial excellence.
          </p>
        </motion.div>

        {/* Co-Founder and Director */}
        <motion.div
          className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          variants={cardVariants}
        >
          <img
            src={coDirectorImage}
            alt="Madhugandha Pavan Gaikwad"
            className="w-40 h-40 rounded-full mb-4 object-cover shadow-lg"
          />
          <h3 className="text-2xl font-semibold text-gray-800">Madhugandha Pavan Gaikwad</h3>
          <p className="text-gray-600 mb-4">(M.E. Computer Engineering / PhD in AI & ML)</p>
          <p className="text-gray-700 leading-relaxed">
            Pioneering the integration of AI, ML, and automation into diecasting, Madhugandha
            revolutionizes manufacturing by enhancing precision, efficiency, and sustainability,
            leading Kamaldev Diecasting toward smart manufacturing.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MeetOurTeam;
