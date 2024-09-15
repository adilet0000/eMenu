import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import classes from "../style/TableSelector.module.css";

function TableSelector() {
  const [searchParams] = useSearchParams();
  const [number, setNumber] = useState(null);

  useEffect(() => {
    const num = searchParams.get('number');
    setNumber(num);
  }, [searchParams]);

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
