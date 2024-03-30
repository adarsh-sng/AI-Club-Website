import React from 'react'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Events from "./components/Events";
import Footer from './components/Footer';

import './App.css';


function App() {
  return (
    <div className="body">
      <Navbar/>
      <Hero/>
      <AboutUs/>
      <Events/>
      <Footer/>
    </div>
  )
}

export default App