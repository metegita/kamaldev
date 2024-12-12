import React from "react";
import image from "../assets/4.jpg";
import image2 from "../assets/5.jpg";
import image3 from "../assets/home.jpeg";
import image4 from "../assets/homebg.jpeg";
import image5 from "../assets/homebg1.jpeg";
import image6 from "../assets/bg3.jpg";

const Gallery = () => {
  const images = [image, image2, image3, image4, image5, image6];

  return (
    <div className="bg-white py-12 px-6 sm:px-12 lg:px-20">
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-8">
        View Our Gallery
      </h2>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg group transform transition duration-500 hover:scale-105"
          >
            {/* Image */}
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-56 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-blue-700 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <span className="text-white font-semibold text-lg sm:text-xl">
                Image {index + 1}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
