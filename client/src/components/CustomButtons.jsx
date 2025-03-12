import React from "react";
import { Link } from "react-router";

const NormalButton = ({ to, children }) => {
  return (
    <button className="p-4 space-x-1 bg-gradient-to-r from-purple-600 to-red-600 text-white font-semibold rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105">
      <Link to={to}>{children}</Link>
    </button>
  );
};

const InvertedButton = ({ to, children }) => {
  return (
    <button className="p-4 space-x-1 bg-gradient-to-r from-blue-600 to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:from-purple-600 hover:to-red-600 transition-all transform hover:scale-105">
      <Link to={to}>{children}</Link>
    </button>
  );
};

const PillNormalButton = ({ to, children }) => {
  return (
    <button className="p-4 space-x-1 bg-gradient-to-r from-purple-600 to-red-600 text-white font-semibold rounded-full shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105">
      <Link to={to}>{children}</Link>
    </button>
  );
};

const PillInvertedButton = ({ to, children }) => {
  return (
    <button className="p-4 space-x-1 bg-gradient-to-r from-blue-600 to-purple-700 text-white font-semibold rounded-full shadow-lg hover:from-purple-600 hover:to-red-600 transition-all transform hover:scale-105">
      <Link to={to}>{children}</Link>
    </button>
  );
};

const NoHoverNormalButton = ({ to, children }) => {
  return (
    <button className="p-4 space-x-1 bg-gradient-to-r from-purple-600 to-red-600 text-white font-semibold rounded-lg shadow-lg bg-opacity-20 hover:bg-opacity-25 transition-all transform hover:scale-105">
      <Link to={to}>{children}</Link>
    </button>
  );
};

const NoHoverInvertedButton = ({ to, children }) => {
  return (
    <button className="p-4 space-x-1 bg-gradient-to-r from-blue-600 to-purple-700 text-white font-semibold rounded-lg shadow-lg bg-opacity-20 hover:bg-opacity-25 transition-all transform hover:scale-105">
      <Link to={to}>{children}</Link>
    </button>
  );
};

const NoHoverPillNormalButton = ({ to, children }) => {
  return (
    <button className="p-4 space-x-1 bg-gradient-to-r from-purple-600 to-red-600 text-white font-semibold rounded-full shadow-lg bg-opacity-20 hover:bg-opacity-25 transition-all transform hover:scale-105">
      <Link to={to}>{children}</Link>
    </button>
  );
};

const NoHoverPillInvertedButton = ({ to, children }) => {
  return (
    <button className="p-4 space-x-1 bg-gradient-to-r from-blue-600 to-purple-700 text-white font-semibold rounded-full shadow-lg bg-opacity-20 hover:bg-opacity-25 transition-all transform hover:scale-105">
      <Link to={to}>{children}</Link>
    </button>
  );
};

export { 
  NormalButton, 
  InvertedButton, 
  PillNormalButton, 
  PillInvertedButton, 
  NoHoverNormalButton, 
  NoHoverInvertedButton, 
  NoHoverPillNormalButton, 
  NoHoverPillInvertedButton 
};