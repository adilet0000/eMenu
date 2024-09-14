import React, { useState } from 'react';
import classes from '../style/SearchFilter.module.css'
import { FaMagnifyingGlass } from "react-icons/fa6";

const SearchFilter = ({ onSearch }) => {
   const [searchQuery, setSearchQuery] = useState('');

   const handleSearchChange = (e) => {
      setSearchQuery(e.target.value);
      onSearch(e.target.value); 
   };

   return (
      <div className={classes.search}>
         <input
            type="text"
            placeholder =' Поиск по меню...'
            value={searchQuery}
            onChange={handleSearchChange}
            className={classes.searchMenu}
         />
      </div>
   );
};

export default SearchFilter;
