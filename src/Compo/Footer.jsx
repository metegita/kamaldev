import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import companyLogo from "../assets/logo.png"; // Import the company logo image

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      {/* Footer Grid */}
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="text-center md:text-left">
          <img
            src={companyLogo}
            alt="Company Logo"
            className="w-32 h-auto mx-auto md:mx-0 mb-4"
          />
          <h2 className="text-2xl font-semibold mb-4">Kamaldev Diecasting Pvt Ltd</h2>
          <p className="text-sm leading-relaxed">
            Delivering excellence in casting solutions with cutting-edge technology and superior quality assurance.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-red-500 transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-red-500 transition duration-300">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-red-500 transition duration-300">
                Services
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-red-500 transition duration-300">
                Products
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-red-500 transition duration-300">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-sm mb-2">📍 123 Industrial Estate, Pune, India</p>
          <p className="text-sm mb-2">📞 +91 98765 43210</p>
          <p className="text-sm mb-4">✉️ info@kamaldevcastings.com</p>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition duration-300 text-xl"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition duration-300 text-xl"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition duration-300 text-xl"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition duration-300 text-xl"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Google Map Embed */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4">Our Location</h3>
          <div className="rounded-lg overflow-hidden shadow-md">
            <iframe
              title="Company Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019633963842!2d144.9559283158475!3d-37.81720974201608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577c7f6ec9471d8!2s123+Industrial+Estate%2C+Pune%2C+India!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="200"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        <div className="mb-7 font-bold text-sm text-gray-400 flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-2">
          <span>© Copyright 2024 Kamaldev Die-Casting. All rights reserved. Developed By</span>
          <img
            src="https://techsuryaitsolution.com/wp-content/themes/tech-surya/assets/images/logo.png"
            alt="Tech Surya Logo"
            className="w-28 h-12"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
