import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuVariants = {
    open: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
    closed: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  return (
    <header className="sticky top-0 z-50 bg-transparent shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-800">
          GUMA
        </Link>
        {/* Hamburger Menu Icon for Mobile */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Navigation Links */}
        <nav className="hidden md:flex md:items-center">
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/about"
                className="text-gray-800 hover:text-blue-500"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="text-gray-800 hover:text-blue-500"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-800 hover:text-blue-500"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/plan-now"
                className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg shadow-md transition hover:from-pink-600 hover:to-purple-600"
              >
                PLAN NOW
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <ul className="flex flex-col space-y-4 p-4">
                <li>
                  <Link
                    to="/about"
                    className="block text-gray-800 hover:text-blue-500"
                    onClick={toggleMenu}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gallery"
                    className="block text-gray-800 hover:text-blue-500"
                    onClick={toggleMenu}
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="block text-gray-800 hover:text-blue-500"
                    onClick={toggleMenu}
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/plan-now"
                    className="block px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg shadow-md transition hover:from-pink-600 hover:to-purple-600"
                    onClick={toggleMenu}
                  >
                    PLAN NOW
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;