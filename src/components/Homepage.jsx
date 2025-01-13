import React from "react";

const StayInTouch = () => {
  return (
    <div className="bg-red-100 p-8 text-center rounded-lg w-full mx-auto my-12 shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Let's Stay in Touch</h2>
      <p className="text-gray-600 text-lg mb-6">
        Join our social media portal so that we reach out to you with our news and offers.
      </p>
      <div className="flex justify-center items-center gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 text-lg w-full sm:w-1/2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <button className="px-6 py-2 text-lg bg-red-600 text-white rounded-md hover:bg-red-700">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default StayInTouch;
