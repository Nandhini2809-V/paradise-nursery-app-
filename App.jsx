import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
import AboutUs from './AboutUs';
import ProductList from './ProductList';
import CartItem from './CartItem';
import './App.css'; 

const store = configureStore({
  reducer: {
    cart: cartReducer
  }
});

// Landing Page with Background
function LandingPage() {
  return (
    <div className="landing">
      <h1>Welcome to Paradise Nursery</h1>
      <p>Your one-stop shop for beautiful houseplants</p>
      <Link to="/products"><button className="getStartedBtn">Get Started</button></Link>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        {/* Navigation Bar - ellam page kum link */}
        <nav style={{padding: '20px', background: 'green', display: 'flex', gap: '20px', justifyContent: 'center'}}>
          <Link to="/" style={{color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '18px'}}>Home</Link>
          <Link to="/products" style={{color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '18px'}}>Products</Link>
          <Link to="/about" style={{color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '18px'}}>About Us</Link>
          <Link to="/cart" style={{color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '18px'}}>Cart</Link>
        </nav>
        
        {/* All Pages Routes */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/cart" element={<CartItem />} />
        </Routes>
      </Router>
    </Provider>
  );
}
export default App;
