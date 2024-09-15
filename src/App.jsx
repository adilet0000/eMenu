import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext'; // Провайдер для корзины
import { TableProvider } from './context/TableContext'; // Провайдер для номера столика
import { OrderProvider } from './context/OrderContext'; // Провайдер для заказов

import HomePage from './pages/HomePage'; // Главная страница
import CartPage from './pages/CartPage'; // Страница корзины
import ChefPage from './pages/ChefPage'; // Страница для повара
import PaymentOptions from './pages/PaymentOptions'; // Страница оплаты
import Header from './components/Header'; // Шапка сайта
import Footer from './components/Footer'; // Футер сайта
import MenuList from './components/MenuList'; // Компонент меню
import SuccessPage from './pages/SuccessPage';

const App = () => {
  return (
    <OrderProvider> {/* Новый контекст для хранения заказов */}
      <TableProvider> {/* Провайдер для номера столика */}
        <CartProvider> {/* Провайдер для корзины */}
          <Router>
            <div className="app">
              <Header /> {/* Шапка сайта */}
              
              {/* Основные маршруты приложения */}
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/payment" element={<PaymentOptions />} />
                <Route path="/chef" element={<ChefPage />} />
                <Route path="/menu" element={<MenuList />} />
                <Route path="/success" element={<SuccessPage/>} /> 
              </Routes>
              
            </div>
          </Router>
        </CartProvider>
      </TableProvider>
    </OrderProvider>
  );
};

export default App;
