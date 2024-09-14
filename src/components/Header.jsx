// Header.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext'; // Контекст корзины
import classes from '../style/Header.module.css';
import { IoCartSharp } from "react-icons/io5";
import { BiSolidDish } from "react-icons/bi";
import { FaHome } from "react-icons/fa";

const Header = () => {
   const { cartItems } = useContext(CartContext); // Данные корзины для отображения количества товаров

   const getTotalItems = () => {
      return cartItems.reduce((total, item) => total + item.quantity, 0); // Считаем общее количество товаров в корзине
   };

   return (
      <header className={classes.header}>
         <nav className={classes.bottomNav}>
            <ul className={classes.navList}>
               <li className={classes.navItem}>
                  <Link to="/" className={classes.navLink}>
                     <FaHome className={classes.icon} /> Main
                  </Link> 
               </li>
               <li className={classes.navItem}>
                  <Link to="/menu" className={classes.navLink}>
                     <BiSolidDish className={classes.icon} /> Menu
                  </Link>
               </li>
               <li className={classes.navItem}>
                  <Link to="/cart" className={classes.navLink}>
                     <IoCartSharp className={classes.icon} /> Cart <span className={classes.counter}>({getTotalItems()})</span>
                  </Link>
               </li>
            </ul>
         </nav>
      </header>
   );
};

export default Header;
