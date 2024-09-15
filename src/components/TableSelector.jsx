import { useState, useEffect, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { TableContext } from '../context/TableContext'; // Импортируем контекст
import classes from "../style/TableSelector.module.css";

function TableSelector() {
  const { setTableNumber } = useContext(TableContext); // Достаем функцию setTableNumber из контекста
  const [searchParams] = useSearchParams();
  const [number, setNumber] = useState(null);

  useEffect(() => {
    const num = searchParams.get('number');
    setNumber(num);

    if (num) {
      setTableNumber(num); // Обновляем номер столика в контексте
    }
  }, [searchParams, setTableNumber]);

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Your table number:</h1>
      {number ? (
        <p className={classes.number}>{number}</p>
      ) : (
        <p className={classes.loading}>Loading...</p>
      )}
    </div>
  );
}

export default TableSelector;
