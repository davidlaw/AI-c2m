import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png'; // Placeholder for logo

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-indigo-600">AI-C2M</span>
            </Link>
            <nav className="ml-6 flex space-x-8">
              <Link to="/" className="text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link to="/products" className="text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Products</Link>
              <Link to="/customize" className="text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Customize</Link>
            </nav>
          </div>
          <div className="flex items-center">
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;