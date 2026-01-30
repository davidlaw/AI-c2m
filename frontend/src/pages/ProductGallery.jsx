import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductGallery = () => {
  const [products] = useState([
    {
      id: 1,
      name: "Modern Desk Lamp",
      description: "Adjustable LED desk lamp with customizable shade designs",
      price: 49.99,
      category: "lamps",
      image: "https://placehold.co/300x300/4f46e5/white?text=Lamp"
    },
    {
      id: 2,
      name: "Personalized Mug",
      description: "Ceramic mug with AI-generated patterns and personal photos",
      price: 19.99,
      category: "cups",
      image: "https://placehold.co/300x300/ec4899/white?text=Mug"
    },
    {
      id: 3,
      name: "Smart Home Light",
      description: "Color-changing smart bulb with customizable covers",
      price: 59.99,
      category: "lamps",
      image: "https://placehold.co/300x300/0ea5e9/white?text=Light"
    },
    {
      id: 4,
      name: "Travel Tumbler",
      description: "Double-walled tumbler with custom design options",
      price: 29.99,
      category: "cups",
      image: "https://placehold.co/300x300/10b981/white?text=Tumbler"
    },
    {
      id: 5,
      name: "Table Lamp",
      description: "Elegant table lamp with personalized shade artwork",
      price: 79.99,
      category: "lamps",
      image: "https://placehold.co/300x300/f97316/white?text=Table+Lamp"
    },
    {
      id: 6,
      name: "Coffee Cup Set",
      description: "Set of 2 ceramic cups with matching custom designs",
      price: 34.99,
      category: "cups",
      image: "https://placehold.co/300x300/8b5cf6/white?text=Coffee+Cups"
    }
  ]);

  const [categories] = useState(['all', 'lamps', 'cups', 'home-decor']);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Customizable Products</h1>
        <p className="mt-4 text-xl text-gray-600">
          Discover our range of products that can be customized with your unique designs
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          {categories.map(category => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-sm font-medium ${
                selectedCategory === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              } border border-gray-200 rounded-md ${
                category === 'all' ? 'rounded-l-md' : 
                category === categories[categories.length - 1] ? 'rounded-r-md' : '-ml-px'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map(product => (
          <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-56 bg-gradient-to-r from-indigo-400 to-purple-500 flex items-center justify-center">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-40 h-40 object-contain"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                  <p className="mt-2 text-gray-600 text-sm">{product.description}</p>
                </div>
                <span className="text-lg font-semibold text-indigo-600">${product.price.toFixed(2)}</span>
              </div>
              <div className="mt-6 flex space-x-3">
                <Link 
                  to={`/customize/${product.id}`}
                  className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-md text-center font-medium hover:bg-indigo-700"
                >
                  Customize
                </Link>
                <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* How It Works Section */}
      <div className="mt-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">AI-Powered Customization Process</h2>
          <p className="text-indigo-100 mb-8">
            Our advanced AI technology helps you create personalized products with ease
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-20 p-6 rounded-lg">
              <div className="text-4xl font-bold mb-3">1</div>
              <h3 className="font-bold text-lg mb-2">Upload or Describe</h3>
              <p className="text-indigo-100">Share your idea through images, text, or descriptions</p>
            </div>
            <div className="bg-white bg-opacity-20 p-6 rounded-lg">
              <div className="text-4xl font-bold mb-3">2</div>
              <h3 className="font-bold text-lg mb-2">AI Enhancement</h3>
              <p className="text-indigo-100">Our AI refines and enhances your concept into stunning visuals</p>
            </div>
            <div className="bg-white bg-opacity-20 p-6 rounded-lg">
              <div className="text-4xl font-bold mb-3">3</div>
              <h3 className="font-bold text-lg mb-2">Perfect Product</h3>
              <p className="text-indigo-100">Receive your custom-designed product crafted to perfection</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;