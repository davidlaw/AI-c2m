import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductCustomizer from './pages/ProductCustomizer';
import ProductGallery from './pages/ProductGallery';
import OrderConfirmation from './pages/OrderConfirmation';
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/customize/:productId" element={<ProductCustomizer />} />
          <Route path="/products" element={<ProductGallery />} />
          <Route path="/order-confirm/:orderId" element={<OrderConfirmation />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;