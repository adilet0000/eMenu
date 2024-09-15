// TablePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const TablePage = ({ tableNumber }) => {
  const navigate = useNavigate();

  const handleOrder = () => {
    // Пример отправки заказа
    fetch('https://emenu-backend.com/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tableNumber: tableNumber,
        orderDetails: {}, // Здесь добавьте детали заказа
      }),
    }).then(response => {
      if (response.ok) {
        navigate('/success'); // Перенаправляем на страницу успеха
      }
    });
  };

  return (
    <div>
      <h2>Стол №{tableNumber}</h2>
      {/* Добавьте форму заказа */}
      <button onClick={handleOrder}>Отправить заказ</button>
    </div>
  );
};

export default TablePage;
