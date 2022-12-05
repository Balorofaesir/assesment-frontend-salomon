import './App.css';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Products from './pages/product-details';
import Home from './pages/home';
import About from './pages/about';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products/:id" element={<Products />} />
    </Routes>
  </div>
);
export default App;
