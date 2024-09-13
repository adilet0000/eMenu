import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext'; // Провайдер для корзины
import { TableProvider } from './context/TableContext'; // Провайдер для номера столика

import HomePage from './pages/HomePage'; // Главная страница
import CartPage from './pages/CartPage'; // Страница корзины
import ChefPage from './pages/ChefPage'; // Страница для повара
import PaymentOptions from './pages/PaymentOptions'; // Страница оплаты
import Header from './components/Header'; // Шапка сайта
import Footer from './components/Footer'; // Футер сайта

const App = () => {
  return (
    <TableProvider>
      <CartProvider>
        <Router>
          <div className="app">
            <Header /> {/* Шапка сайта */}
            
            {/* Основные маршруты приложения */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/payment" element={<PaymentOptions />} />
              <Route path="/chef" element={<ChefPage />} />
            </Routes>

            <Footer /> {/* Футер сайта */}
          </div>
        </Router>
      </CartProvider>
    </TableProvider>
  );
};

export default App;
