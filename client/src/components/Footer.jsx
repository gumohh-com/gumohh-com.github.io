import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 h-0.5 w-full"></div>
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Company Logo */}
            <div className="mb-6 md:mb-0">
              <a href="/" className="text-2xl font-bold">
                <img src="/gumooh-1.png" className="w-18 h-auto" />
              </a>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-6 mb-6 md:mb-0">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://www.instagram.com/gumohh.comm/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaInstagram size={24} />
              </a>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-center">
              <Link to="/contact" className="hover:text-gray-400">
                Contact Us
              </Link>
              <Link to="/about" className="hover:text-gray-400">
                About Us
              </Link>
              <Link to="/gallery" className="hover:text-gray-400">
                Gallery
              </Link>
              <Link to="/blogs" className="hover:text-gray-400">
                Blogs
              </Link>
            </div>
          </div>

          {/* Copyright Text */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            &copy; {new Date().getFullYear()} Gumohh. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
