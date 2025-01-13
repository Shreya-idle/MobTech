import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Ensure correct import for routing

import CircleVisibility from './components/Navbar'; 
import HomePage from './components/Homepage'; 
import TrendingRecipes from './components/TrendingRecipes'; 
import StayInTouch from './components/Homepage'; 
import PopularDishes from './components/Populardishes'; 
import Footer from './components/Footer'; 
import Signup from './components/Signup'; 

function App() {
  return (
    <Router> 
      <div>
        
        <CircleVisibility />
        <HomePage />
        <TrendingRecipes />
        <StayInTouch />
        <PopularDishes />
        <Footer />

        {/* Link to Signup Page */}
        <div>
          <Link to="/signup">
            <button className="bg-red-500 text-white mx-4 px-4 py-3 rounded-md shadow-md hover:bg-red-600 mt-6">
              Sign Up
            </button>
          </Link>
        </div>

        {/* Define the Routes for navigation */}
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Home Page Route */}
          <Route path="/signup" element={<Signup />} /> {/* Signup Page Route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
