import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Correct import
import image1 from "../assets/logo.png"; // Update this if necessary
import image from "../assets/bg.png"; // Update this if necessary
import Signup from "./Signup";

const CircleVisibility = () => {
  const navigate = useNavigate(); // Correct initialization of useNavigate

  const handleSignUpClick = () => {
    navigate("/signup"); // Navigate to the Signup page
  };

  return (
    <div className="relative w-full h-screen overflow-x-hidden">
      {/* Button and Text Section */}
      <div className="absolute top-1/3 left-7 right-15 px-4 text-left z-10">
        {/* Heading and Description */}
        <h1 className="text-6xl font-bold text-black mb-6">
          Your Daily Dish A <span className="text-red-500">Food</span> Journey
        </h1>
        <p className="text-4xl mr-[28rem] text-gray-700 mb-12">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
        </p>
        <Link to='/Signup'><button
          className="bg-red-500 text-white mx-4 px-4 py-3 rounded-md shadow-md hover:bg-red-600 mt-6"
          onClick={handleSignUpClick}
        >
          Sign Up
        </button></Link>

        {/* Login Text */}
        <p className="text-gray-600 mt-4">
          Do you have an account?{" "}
          <span
            className="text-red-500 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>

      {/* Circle 1 */}
      <div className="absolute -top-[327px] -right-[200px] w-[36rem] h-[37rem] rounded-full ring-4 ring-red-500 bg-red-500 overflow-hidden">
        <div className="w-full h-full transform translate-y-3/4 bg-red-500"></div>
      </div>

      {/* Circle 2 */}
      <div className="absolute top-[200px] -right-[300px] w-[34rem] h-[35rem] rounded-full bg-red-500 ring-4 ring-red-500 overflow-hidden">
        <div className="w-full h-full transform translate-y-1/2 bg-red-500"></div>
      </div>

      {/* Circular Image */}
      <div className="absolute top-[9rem] right-[2rem] w-[22rem] h-[20rem] rounded-full overflow-hidden">
        <img
          src={image}
          alt="Circular Image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Circle Image in Top-Left Corner */}
      <div className="absolute top-0 left-0 w-[10rem] h-[10rem] rounded-full overflow-hidden">
        <img
          src={image1}
          alt="Top Left Circle Image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Switched Boxes */}
      <div className="absolute top-4 right-4 flex items-center space-x-3 z-20">
        {/* Order Now Box */}
        <div className="bg-white px-6 py-2 rounded-md flex items-center justify-center transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-red-500 group">
          <button className="text-lg font-bold text-red-500 group-hover:text-white">
            Order Now
          </button>
        </div>

        {/* Get Up To 50% Off Box */}
        <div className="text-black p-4 rounded-md text-center flex flex-col items-center">
          <p className="text-sm font-semibold text-white">Get Up To</p>
          <p className="text-3xl font-bold text-white">50% Off</p>
          <p className="text-sm font-semibold text-white">on your order</p>
        </div>
      </div>
    </div>
  );
};

export default CircleVisibility;
