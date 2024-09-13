import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
   return (
      <footer className="footer">
         <div className="footer-content">
            <div className="footer-section">
               <h4>Контактная информация</h4>
               <p>Адрес: ул. Примерная, 123, Город</p>
               <p>Телефон: +123 456 789</p>
               <p>Email: example@example.com</p>
            </div>

            <div className="footer-section">
               <h4>Навигация</h4>
               <ul>
                  <li>
                     <Link to="/">Главная</Link>
                  </li>
                  <li>
                     <Link to="/menu">Меню</Link>
                  </li>
                  <li>
                     <Link to="/cart">Корзина</Link>
                  </li>
                  <li>
                     <Link to="/about">О нас</Link>
                  </li>
               </ul>
            </div>

            <div className="footer-section">
               <h4>Мы в социальных сетях</h4>
               <ul className="social-links">
                  <li>
                     <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        Facebook
                     </a>
                  </li>
                  <li>
                     <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        Instagram
                     </a>
                  </li>
                  <li>
                     <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        Twitter
                     </a>
                  </li>
               </ul>
            </div>
         </div>
         <div className="footer-bottom">
            <p>&copy; 2024 Название заведения. Все права защищены.</p>
         </div>
      </footer>
   );
};

export default Footer;
