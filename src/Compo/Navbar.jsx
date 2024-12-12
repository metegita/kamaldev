import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // For mobile menu state

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
          ? "bg-white shadow-md text-black" // White background and black text when scrolled
          : "bg-transparent text-white" // Transparent background and white text when not scrolled
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo and Company Name */}
        <div
          className={`text-xl font-bold transition-opacity duration-300 ${
            isScrolled ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="text-blue-600">KAMALDEV</span> DIECASTING
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="block lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-black focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`lg:flex space-x-6 ${
            isMobileMenuOpen ? "block" : "hidden"
          } lg:block`}
        >
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
