
import React from 'react';
import './App.css';
import StayInTouch from './components/Homepage';
import HomePage from './components/Section';
import TrendingRecipes from './components/TrendingRecipes';
import PopularDishes from './components/Populardishes';
import Footer from './components/Footer';
import CircleVisibility from './components/Navbar';
function App() {
  return (
    <>
    <CircleVisibility />
      <HomePage />
      <TrendingRecipes />
      <StayInTouch />
      <PopularDishes />
      <Footer/>
    </>
  );
}

export default App;
