import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext'; // Контекст корзины
import classes from '../style/Header.module.css'
import '../style/General.css'
import { IoCartSharp } from "react-icons/io5";
import { BiSolidDish } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import logo from '../media/eMenu.png'


const Header = () => {
   const { cartItems } = useContext(CartContext); // Данные корзины для отображения количества товаров

   const getTotalItems = () => {
      return cartItems.reduce((total, item) => total + item.quantity, 0); // Считаем общее количество товаров в корзине
   };

   return (
      <header className="header">
         <div className={classes.logo}>
            <Link to="/">
               <img src={logo} alt="Логотип"/>
            </Link>
            <h1 className={classes.title}>eMenu</h1>
            <h4 className={classes.disc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil suscipit eius corporis deserunt aliquam eligendi, eveniet, inventore nisi beatae nam sit rem. Corporis ipsum tenetur consectetur officia repellat sequi cumque?</h4>
         </div>
         <nav className="navigation">
            <ul className={classes.t}>
               <li className={classes.main}>
                  <Link to="/" className={classes.main}><FaHome className={classes.cartIcon}/> Главная</Link> 
               </li>
               <li className={classes.main2}>
                   <Link to="/menu" className={classes.main2}><BiSolidDish className={classes.cartIcon}/> Меню</Link>
               </li>
               <li className={classes.main3}>
                  <Link to="/cart" className={classes.main3}>
                        <IoCartSharp className={classes.cartIcon} /> Корзина 
                  </Link> <span className={classes.counter}>({getTotalItems()}) </span>
               </li>
            </ul>
         </nav>
         <hr />
      </header>
   );
};

export default Header;
