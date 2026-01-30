import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-50 to-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
              Transform Your Ideas Into Reality
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              Our AI-powered platform lets you customize products with your own designs, images, or let our AI generate unique concepts for lamps, cups, and more.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/products" 
                className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-indigo-700 transition duration-300"
              >
                Browse Products
              </Link>
              <Link 
                to="/customize" 
                className="inline-block bg-white text-indigo-600 border border-indigo-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-indigo-50 transition duration-300"
              >
                Start Customizing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">How It Works</h2>
            <p className="mt-4 text-xl text-gray-600">
              Create custom products in just a few simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="mx-auto bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-indigo-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Choose Your Product</h3>
              <p className="text-gray-600">
                Select from our range of customizable products including lamps, cups, home decor, and accessories.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-indigo-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Design & Customize</h3>
              <p className="text-gray-600">
                Upload your own images, enter text, or let our AI generate custom designs based on your preferences.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-indigo-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Order & Receive</h3>
              <p className="text-gray-600">
                Confirm your design, place your order, and receive your personalized product delivered to your door.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Featured Products</h2>
            <p className="mt-4 text-xl text-gray-600">
              Popular items that can be customized with your unique touch
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-r from-purple-400 to-indigo-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Modern Desk Lamp</h3>
                <p className="mt-2 text-gray-600">Adjustable LED desk lamp with customizable shade designs</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-lg font-semibold text-indigo-600">$49.99</span>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                    Customize
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-r from-pink-400 to-orange-400"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Personalized Mug</h3>
                <p className="mt-2 text-gray-600">Ceramic mug with AI-generated patterns and personal photos</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-lg font-semibold text-indigo-600">$19.99</span>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                    Customize
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-r from-green-400 to-teal-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Smart Home Light</h3>
                <p className="mt-2 text-gray-600">Color-changing smart bulb with customizable covers</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-lg font-semibold text-indigo-600">$59.99</span>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                    Customize
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;