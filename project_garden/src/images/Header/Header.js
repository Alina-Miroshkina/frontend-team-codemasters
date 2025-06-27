import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4">
      {/* Top Section */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <img src="./components/images/Banner/." alt="Logo" className="h-8 mr-2" />
          <button className="bg-gray-200 rounded-full w-10 h-5 flex items-center">
            <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
          </button>
        </div>
        <span className="bg-green-500 text-white text-sm px-2 py-1 rounded">1 day discount!</span>
        <div className="flex space-x-4">
          <button><span className="text-gray-500">❤️</span></button>
          <button><span className="text-gray-500">🛒</span></button>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex space-x-6 mb-4">
        <Link to="/" className="text-gray-700 hover:text-green-500">Main Page</Link>
        <Link to="/categories" className="text-gray-700 hover:text-green-500">Categories</Link>
        <Link to="/products" className="text-gray-700 hover:text-green-500">All products</Link>
        <Link to="/sales" className="text-gray-700 hover:text-green-500">All sales</Link>
      </nav>

      {/* Main Banner */}
      <div className="relative bg-cover bg-center h-64" style={{ backgroundImage: "url(/images/Banner/banner.jpg)" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold mb-4">Amazing Discounts on Garden Products!</h1>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Check out</button>
        </div>
      </div>
    </header>
  );
};

export default Header;