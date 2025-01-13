import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import StayInTouch from './components/Homepage';
import HomePage from './components/Section';
import TrendingRecipes from './components/TrendingRecipes';
import PopularDishes from './components/Populardishes';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';  // Import Login component
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  const [showSignup, setShowSignup] = useState(false); // State for toggling the signup popup
  const [showLogin, setShowLogin] = useState(false); // State for toggling the login popup

  return (
    <div className="app-wrapper">
      {/* Render the signup and login popups only when their respective states are true */}
      {showSignup && <Signup setShowSignup={setShowSignup} />}
      {showLogin && <Login setShowLogin={setShowLogin} />}

      {/* Pass the setShowSignup and setShowLogin functions to Navbar */}
      <Navbar setShowSignup={setShowSignup} setShowLogin={setShowLogin} />

      {/* Other components */}
      <ErrorBoundary>
        <HomePage />
        <TrendingRecipes />
        <StayInTouch />
        <PopularDishes />
        <Footer />
      </ErrorBoundary>
    </div>
  );
}

export default App;
