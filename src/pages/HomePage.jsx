// HomePage.jsx
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Хук для навигации
import { TableContext } from '../context/TableContext'; // Контекст столика
import classes from '../style/HomePage.module.css';
import logo from '../media/eMenu.png';
import Footer from '../components/Footer';
import TableSelector from '../components/TableSelector';

const HomePage = () => {
   const { tableNumber } = useContext(TableContext); // Получаем номер столика из контекста
   const [showModal, setShowModal] = useState(false); // Состояние для отображения модального окна
   const [password, setPassword] = useState(''); // Состояние для пароля
   const [error, setError] = useState(''); // Состояние для ошибки
   const navigate = useNavigate(); // Хук для навигации

   const correctPassword = 'chef123'; // Пароль для доступа к странице ChefPage

   // Функция для проверки пароля
   const handlePasswordSubmit = () => {
      if (password === correctPassword) {
         navigate('/chef'); // Перенаправляем на страницу ChefPage при правильном пароле
      } else {
         setError('Incorrect password.'); // Показать ошибку
      }
   };

   return (
      <div className={classes.homePage}>
         <header className={classes.header}>
            {/* Логотип */}
            <div className={classes.logo}>
               <img src={logo} className={classes.logoText} />
            </div>
            {/* Добро пожаловать и номер столика */}
            <div className={classes.welcome}>
               <h2>Welcome!</h2>
               {tableNumber ? (
                  <h3 className={classes.alt}>You're table is {tableNumber}</h3>
               ) : (
                  <TableSelector/>
               )}
            </div>
         </header>

         {/* Описание заведения */}
         <main>
            <section className={classes.descriptionSection}>
               <h2>About restaurant</h2>
               <p>
                  The iconic establishment for Tyumen, eMenu, opened its doors in 2019 and immediately felt this attention,
                  where guests can enjoy excellent cuisine and a cozy atmosphere.
               </p>
            </section>

            {/* Кнопка перехода на страницу повара */}
            <button className={classes.chefButton} onClick={() => setShowModal(true)}>
               Chef Page
            </button>
         </main>

         <Footer />

         {/* Модальное окно для ввода пароля */}
         {showModal && (
            <div className={classes.modal}>
               <div className={classes.modalContent}>
                  <h2>Enter password</h2>
                  <input
                     type="password"
                     placeholder="Enter password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                  />
                  {error && <p className={classes.error}>{error}</p>}
                  <div className={classes.modalButtons}>
                     <button className={classes.btn} onClick={() => setShowModal(false)}>Cancel</button>
                     <button className={classes.btn} onClick={handlePasswordSubmit}>Submit</button>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
};

export default HomePage;
