import React, { useState } from "react";
import { Link } from "react-router"; // Fix: Import from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  const handleScroll = () => {
    if (window.scrollY > 800) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  window.addEventListener('scroll', handleScroll);

  const navbarStyle = !isMenuOpen? "fixed top-0 left-0 right-0 z-50 bg-transparent" : "fixed top-0 left-0 right-0 z-50 bg-black/50";

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 ${isScrolled? "bg-black/90": (isMenuOpen? "bg-black/50" : "bg-transparent")}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex justify-around w-72 items-center">
          <Link to="/" className="text-2xl font-bold text-white">
            <img src="/gumooh-1.png" className="w-16 h-auto rounded-full" />
          </Link>
          <div>
            <Link to="/">
              <p className="text-2xl font-bold text-white">GUMOHH!</p>
            </Link>
            <p className="text-white ">Imagine a new adventure.</p>
          </div>
        </div>
        {/* Hamburger Menu Icon for Mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
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
                className="text-white hover:text-blue-500 font-medium"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="text-white hover:text-blue-500 font-medium"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-white hover:text-blue-500 font-medium"
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
              className="md:hidden absolute top-24 left-0 right-0 bg-black/50 shadow-lg -z-20"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <ul className="flex flex-col space-y-4 p-4">
                <li>
                  <Link
                    to="/about"
                    className="block text-white hover:text-blue-500"
                    onClick={toggleMenu}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gallery"
                    className="block text-white hover:text-blue-500"
                    onClick={toggleMenu}
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="block text-white hover:text-blue-500"
                    onClick={toggleMenu}
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/plan-now"
                    className="block px-4 py-2 bg-gradient-to-r from-gray-500 to-gray-500 text-white font-semibold rounded-lg shadow-md transition hover:from-pink-600 hover:to-purple-600"
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
    </div>
  );
};

export default Header;
