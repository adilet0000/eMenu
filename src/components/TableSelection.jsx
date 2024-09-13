import React, { useEffect, useContext } from 'react';
import { useSearchParams } from 'react-router-dom'; // Для получения параметров из URL
import { TableContext } from '../context/TableContext'; // Контекст для сохранения информации о столике

const TableSelection = () => {
   const [searchParams] = useSearchParams(); // Получаем параметры из URL
   const { setTableNumber, tableNumber } = useContext(TableContext); // Получаем функцию для установки номера столика из контекста

   useEffect(() => {
      // Получаем номер столика из параметров URL
      const table = searchParams.get('table');

      if (table) {
         setTableNumber(table); // Сохраняем номер столика в контексте
      }
   }, [searchParams, setTableNumber]);

   return (
      <div className="table-selection">
         {tableNumber ? (
            <h2>Вы сидите за столиком №{tableNumber}</h2>
         ) : (
            <h2>Определение номера столика...</h2>
         )}
      </div>
   );
};

export default TableSelection;
