// HomePage.jsx
import React, { useContext } from 'react';
import { TableContext } from '../context/TableContext'; // Контекст столика
import classes from '../style/HomePage.module.css';
import logo from '../media/eMenu.png'
import Footer from '../components/Footer';


const HomePage = () => {
   const { tableNumber } = useContext(TableContext); // Получаем номер столика из контекста

   return (
      <div className={classes.homePage}>
         <header className={classes.header}>
            {/* Логотип */}
            <div className={classes.logo}>
               <img src={logo} className={classes.logoText}/>
            </div>   
            {/* Добро пожаловать и номер столика */}
            <div className={classes.welcome}>
               <h2>Welcome!</h2>
               {tableNumber ? (
                  <h3 className={classes.alt}>Вы сидите за столиком №{tableNumber}</h3>
               ) : (
                  <div className={classes.loadingDiv}>
                     <img
                        className={classes.loading}
                        src="https://cdn.pixabay.com/animation/2023/08/11/21/18/21-18-05-265_512.gif"
                        alt=""
                     />
                     <p className={classes.parag}>Determining the table number...</p>
                  </div>
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
         </main>
         <Footer />
      </div>
   );
};

export default HomePage;
