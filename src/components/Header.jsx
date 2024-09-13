import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext'; // Контекст корзины

const Header = () => {
   const { cartItems } = useContext(CartContext); // Данные корзины для отображения количества товаров

   const getTotalItems = () => {
      return cartItems.reduce((total, item) => total + item.quantity, 0); // Считаем общее количество товаров в корзине
   };

   return (
      <header className="header">
         <div className="logo">
            <Link to="/">
               <img src="/path-to-logo/logo.png" alt="Логотип" className="logo-image" />
            </Link>
            <h1>Название заведения</h1>
         </div>
         <nav className="navigation">
            <ul>
               <li>
                  <Link to="/">Главная</Link>
               </li>
               <li>
                  <Link to="/menu">Меню</Link>
               </li>
               <li>
                  <Link to="/cart" className="cart-link">
                     Корзина <span className="cart-count">({getTotalItems()})</span>
                  </Link>
               </li>
            </ul>
         </nav>
      </header>
   );
};

export default Header;
