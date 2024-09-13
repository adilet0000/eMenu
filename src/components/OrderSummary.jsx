import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext'; // Контекст корзины
import { useNavigate } from 'react-router-dom'; // Для навигации на страницу оплаты

const OrderSummary = () => {
   const { cartItems, totalPrice } = useContext(CartContext); // Данные корзины из контекста
   const navigate = useNavigate(); // Навигация

   const handleProceedToPayment = () => {
      // Переход на страницу оплаты
      if (cartItems.length > 0) {
         navigate('/payment');
      } else {
         alert('Ваша корзина пуста. Пожалуйста, добавьте блюда.');
      }
   };

   return (
      <div className="order-summary">
         <h3>Итоговая стоимость</h3>
         <div className="order-summary-total">
            <span>Полная стоимость: </span>
            <span>{totalPrice} с</span>
         </div>
         <button
            className="proceed-button"
            onClick={handleProceedToPayment}
            disabled={cartItems.length === 0}
         >
            Перейти к оплате
         </button>
      </div>
   );
};

export default OrderSummary;
