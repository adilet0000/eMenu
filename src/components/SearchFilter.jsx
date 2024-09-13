import React, { useState } from 'react';

const SearchFilter = ({ onSearch }) => {
   const [searchQuery, setSearchQuery] = useState('');

   const handleSearchChange = (e) => {
      setSearchQuery(e.target.value);
      onSearch(e.target.value); // Передаем запрос на фильтрацию
   };

   return (
      <div className="search-filter">
         <input
            type="text"
            placeholder="Поиск по меню..."
            value={searchQuery}
            onChange={handleSearchChange}
         />
      </div>
   );
};

export default SearchFilter;
