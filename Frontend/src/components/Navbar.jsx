import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import image1 from "../assets/logo.png";
import image from "../assets/bg.png";
import Login from "./Login"; // Import the Login component

const CircleVisibility = ({ setShowSignup }) => {
  const [showLogin, setShowLogin] = useState(false); // State for toggling the login popup
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen overflow-x-hidden">
      {/* Text and Button Section */}
      <div className="absolute top-1/3 left-7 right-15 px-4 text-left z-10">
        <h1 className="text-6xl font-bold text-black mb-6">
          Your Daily Dish: A <span className="text-red-500">Food</span> Journey
        </h1>
        <p className="text-4xl mr-[28rem] text-gray-700 mb-12">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s.
        </p>
        <button
          className="bg-red-500 text-white mx-4 px-4 py-3 rounded-md shadow-md hover:bg-red-600 mt-6"
          onClick={() => setShowSignup(true)}
        >
          Sign Up
        </button>
        <p className="text-gray-600 mt-4">
          Do you have an account?{' '}
          <span
            className="text-red-500 cursor-pointer hover:underline"
            onClick={() => setShowLogin(true)} // Set showLogin to true when login is clicked
          >
            Login
          </span>
        </p>
      </div>

      {/* Decorative Circles */}
      <div className="absolute -top-[327px] -right-[200px] w-[36rem] h-[37rem] rounded-full ring-4 ring-red-500 bg-red-500"></div>
      <div className="absolute top-[200px] -right-[300px] w-[34rem] h-[35rem] rounded-full ring-4 ring-red-500 bg-red-500"></div>

      {/* Circular Images */}
      <div className="absolute top-[9rem] right-[2rem] w-[22rem] h-[20rem] rounded-full overflow-hidden">
        <img
          src={image}
          alt="Decorative Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 w-[10rem] h-[10rem] rounded-full overflow-hidden">
        <img
          src={image1}
          alt="Logo"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Call-to-Action Boxes */}
      <div className="absolute top-4 right-4 flex items-center space-x-3 z-20">
        {/* Order Now Box */}
        <div className="bg-white px-6 py-2 rounded-md flex items-center justify-center transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-red-500 group">
          <button className="text-lg font-bold text-red-500 group-hover:text-white">
            Order Now
          </button>
        </div>

        {/* Discount Box */}
        <div className="bg-red-500 p-4 rounded-md text-center flex flex-col items-center text-white">
          <p className="text-sm font-semibold">Get Up To</p>
          <p className="text-3xl font-bold">50% Off</p>
          <p className="text-sm font-semibold">on your order</p>
        </div>
      </div>

      {/* Render Login Popup if showLogin is true */}
      {showLogin && (
        <div className="fixed inset-0 flex justify-center items-center z-30 bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-xl w-[400px]">
            <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

            {/* Login Form */}
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>

              <div className="mt-6 flex justify-center">
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600"
                >
                  Login
                </button>
              </div>
            </form>

            <div className="mt-4 text-center">
              <span
                className="text-red-500 cursor-pointer hover:underline"
                onClick={() => setShowLogin(false)} // Close the login popup
              >
                Close
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CircleVisibility;
