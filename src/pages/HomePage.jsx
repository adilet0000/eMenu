import React, { useState, useEffect, useContext } from 'react';
import MenuList from '../components/MenuList'; // Компонент для отображения меню
import SearchFilter from '../components/SearchFilter'; // Компонент для поиска и фильтрации
import { TableContext } from '../context/TableContext'; // Контекст столика
import classes from '../style/HomePage.module.css'
import '../style/General.css'

const HomePage = () => {
   const { tableNumber } = useContext(TableContext); // Получаем номер столика из контекста
   const [menuItems, setMenuItems] = useState([]); // Все блюда
   const [filteredItems, setFilteredItems] = useState([]); // Отфильтрованные блюда

   useEffect(() => {
      // Здесь должна быть логика для загрузки блюд с сервера
      const fetchData = async () => {
         const response = await fetch('/api/menu');
         const data = await response.json();
         setMenuItems(data); // Устанавливаем все блюда
         setFilteredItems(data); // Изначально отфильтрованные блюда такие же
      };

      fetchData();
   }, []);

   const handleSearch = (query) => {
      if (query === '') {
         setFilteredItems(menuItems); // Если запрос пустой, возвращаем все блюда
      } else {
         const filtered = menuItems.filter((item) =>
            item.name.toLowerCase().includes(query.toLowerCase())
         );
         setFilteredItems(filtered); // Устанавливаем отфильтрованные блюда
      }
   };

   return ( 
      <div className="home-page">
         <header className={classes.header}>
            <h1 className={classes.title}>Добро пожаловать в наше заведение!</h1>
            {tableNumber ? (
               <h2>Вы сидите за столиком №{tableNumber}</h2>
            ) : (
               <div className={classes.loadingDiv}>
                  <img className={classes.loading} src="https://cdn.pixabay.com/animation/2023/08/11/21/18/21-18-05-265_512.gif" alt="" />
                  <p className={classes.parag}>Определение номера столика...</p>
               </div>
            )}
         </header>
         <hr />

         <main>
            <section className="menu-section">
               <h2 className={classes.menuTitle}>Меню</h2>
               <SearchFilter onSearch={handleSearch} /> 
               <MenuList items={filteredItems} /> 
            </section>
         </main>
      </div>
   );
};

export default HomePage;
