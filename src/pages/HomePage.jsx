import React, { useState, useEffect, useContext } from 'react';
import MenuList from '../components/MenuList'; // Компонент для отображения меню
import SearchFilter from '../components/SearchFilter'; // Компонент для поиска и фильтрации
import { TableContext } from '../context/TableContext'; // Контекст столика

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
         <header>
            <h1>Добро пожаловать в наше заведение!</h1>
            {tableNumber ? (
               <h2>Вы сидите за столиком №{tableNumber}</h2>
            ) : (
               <p>Определение номера столика...</p>
            )}
         </header>

         <main>
            <section className="menu-section">
               <h2>Меню</h2>
               <SearchFilter onSearch={handleSearch} /> {/* Компонент поиска */}
               <MenuList items={filteredItems} /> {/* Отображаем отфильтрованные блюда */}
            </section>
         </main>
      </div>
   );
};

export default HomePage;
