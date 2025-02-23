import React from "react";

const App = () => {
  return (
    <div className="relative h-screen">
      {/* Background Video */}
      <video
        className="absolute inset-0 object-cover w-full h-full"
        src="/cover.mp4"
        autoPlay
        loop
        muted
      ></video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-5xl md:text-6xl font-bold text-center">
          Travelling is fun. Together.
        </h1>
        <p className="mt-4 text-lg md:text-xl text-center max-w-2xl">
          Reimagine group travel with us. You imagine the trip and we manage
          everything from planning to execution. It's as simple as that!
        </p>
        <div className="mt-8 flex space-x-4">
          <button
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition"
          >
            Learn More →
          </button>
          <button
            className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg shadow-md transition"
          >
            Plan Now →
          </button>
        </div>
      </div>

      {/* Navbar */}
      <nav className="absolute top-0 w-full flex items-center justify-around px-8 py-4">
        <div className="text-2xl font-bold text-white">GUMOHH!</div>
        <ul className="flex space-x-6 text-white font-medium">
          <li className="hover:underline cursor-pointer">About Us</li>
          <li className="hover:underline cursor-pointer">Gallery</li>
          <li className="hover:underline cursor-pointer">Contact Us</li>
        </ul>
        <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg shadow-md transition">
          Plan Now!
        </button>
      </nav>
    </div>
  );
};

export default App;