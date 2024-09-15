import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext'; // Контекст корзины
import { useNavigate } from 'react-router-dom'; // Для навигации на страницу оплаты
import classes from '../style/OrderSummary.module.css'


const OrderSummary = () => {
   const { cartItems, totalPrice } = useContext(CartContext); // Данные корзины из контекста
   const navigate = useNavigate(); // Навигация

   const handleProceedToPayment = () => {
      // Переход на страницу оплаты
      if (cartItems.length > 0) {
         navigate('/payment');
      } else {
         alert('Your cart is empty. Please, choose something.');
      }
   };

   return (
      <div className="order-summary">
         <div className={classes.buttonDiv}>
            <button
               className={classes.button}
               onClick={handleProceedToPayment}
               disabled={cartItems.length === 0}
            >
               Proceed to payment
            </button>
         </div>
      </div>
   );
};

export default OrderSummary;
