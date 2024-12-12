import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Scroll triggers navbar change
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md text-black" // After scroll
          : "bg-transparent text-black"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo and Company Name - Hidden on Transparent, Shown on Scroll */}
        <div
          className={`text-xl font-bold transition-opacity duration-300 ${
            isScrolled ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="text-blue-600">KAMALDEV</span> DIECASTING
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className={`hover:text-blue-600 ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/abouthero"
              className={`hover:text-blue-600 ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/productandservices"
              className={`hover:text-blue-600 ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/carrehero"
              className={`hover:text-blue-600 ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              Carrier
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
