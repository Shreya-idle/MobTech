import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import image1 from "../assets/logo.png";
import image from "../assets/bg.png";

const Login = ({ setShowLogin }) => {
  const [formData, setFormData] = useState({
    username: "", // Add username field
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.username || !formData.email || !formData.password) {
      alert("Please fill in all fields!");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (data.success) {
        alert("Login successful!");
        navigate("/dashboard");
      } else {
        alert("Login failed: " + data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full h-screen overflow-x-hidden">
      {/* Login Form */}
      <div className="absolute top-1/3 left-7 right-15 px-4 text-left z-10">
        <h1 className="text-6xl font-bold text-black mb-6">
          Welcome Back! <span className="text-red-500">Login</span> Now
        </h1>
        <p className="text-4xl mr-[28rem] text-gray-700 mb-12">
          Enter your credentials to access your account and explore our features.
        </p>

        <div className="bg-white rounded-lg p-6 shadow-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Username Input */}
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
                aria-label="Enter your username"
              />
            </div>
            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
                aria-label="Enter your email"
              />
            </div>
            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
                aria-label="Enter your password"
              />
            </div>
            <button
              type="submit"
              className={`w-full py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Logging In..." : "Login"}
            </button>
          </form>
        </div>

        <p className="text-gray-600 mt-4">
          Don’t have an account?{" "}
          <span
            className="text-red-500 cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Sign Up
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
    </div>
  );
};

export default Login;
