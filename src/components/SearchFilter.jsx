import React, { useState } from 'react';
import classes from '../style/SearchFilter.module.css'


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
            placeholder ='Menu search'
            value={searchQuery}
            onChange={handleSearchChange}
            className={classes.searchMenu}
         />
      </div>
   );
};

export default SearchFilter;
