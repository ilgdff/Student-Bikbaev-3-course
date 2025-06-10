import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import PersonalInfo from './components/PersonalInfo/PersonalInfo';
import Product from './pages/Product/Product';
import Products from './pages/Products/Products';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="app">
          <header>
            <div className="header-content">
              <Link to="/" className="logo">
                <span className="logo-text">iTech</span>
              </Link>
              <nav>
                <Link to="/">Главная</Link>
                <Link to="/products">Каталог</Link>
                <Link to="/cart">Корзина</Link>
                <Link to="/personal">Личный кабинет</Link>
              </nav>
            </div>
          </header>

          <PersonalInfo userInfo="Иванов Иван Иванович, 25 лет" />

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
