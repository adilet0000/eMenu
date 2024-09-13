import React, { createContext, useState } from 'react';

// Создаем контекст
export const TableContext = createContext();

export const TableProvider = ({ children }) => {
   const [tableNumber, setTableNumber] = useState(null);

   return (
      <TableContext.Provider value={{ tableNumber, setTableNumber }}>
         {children}
      </TableContext.Provider>
   );
};
