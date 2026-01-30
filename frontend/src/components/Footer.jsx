import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">AI-C2M Platform</h3>
            <p className="text-gray-300">Transforming ideas into reality through AI-powered customization.</p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Lamps</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Cups</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Home Decor</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Accessories</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Shipping</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Returns</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; 2026 AI-C2M Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;