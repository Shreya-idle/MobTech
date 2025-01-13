import React from "react";
import image11 from '../assets/food_red.jpeg';
import image12 from '../assets/Nestlé.png';
import image13 from '../assets/th.jpg';
import image14 from '../assets/del.jpeg';

const Footer = () => {
  return (
    <>
      {/* Partner Logos Section with White Background */}
      <div className="bg-white py-6">
        <div className="flex justify-center space-x-10 mb-10">
          <img src={image11} alt="Partner 1" className="h-24" />
          <img src={image12} alt="Nestle" className="h-24" />
          <img src={image13} alt="Walmart" className="h-24" />
          <img src={image14} alt="Delivery" className="h-24" />
        </div>
      </div>
      {/* Footer Section with Grey Background */}
      <footer className="bg-gray-100 py-10">
        {/* Footer Content */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
          {/* Logo and Description */}
          <div>
            <img
              src="/path/to/vegan-fuel-logo.png"
              alt="Vegan Fuel"
              className="h-14 mb-4"
            />
            <p className="text-sm text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s.
            </p>
          </div>

          {/* Quick Links - Home, Recipes, Blog */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600 hover:text-gray-800">Home</li>
              <li className="text-sm text-gray-600 hover:text-gray-800">Recipes</li>
              <li className="text-sm text-gray-600 hover:text-gray-800">Blog</li>
            </ul>
          </div>

          {/* Quick Links - Share Review, About Us, Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600 hover:text-gray-800">Share Review</li>
              <li className="text-sm text-gray-600 hover:text-gray-800">About Us</li>
              <li className="text-sm text-gray-600 hover:text-gray-800">Contact</li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Subscribe to Newsletter</h4>
            <p className="text-sm text-gray-600 mb-4">
              Subscribe to our newsletter to get more free tips
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                type="submit"
                className="bg-red-500 text-white px-4 py-2 rounded-r-md hover:bg-red-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </footer>

      {/* Footer copyright */}
      <footer className="w-full bg-red-100 py-4 text-center text-gray-700">
        <p>© 2024 Vegan Fuel. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Footer;
