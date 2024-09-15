import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext'; // Контекст корзины
import { TableContext } from '../context/TableContext'; // Контекст столика
import axios from 'axios'; // Для отправки данных на MockAPI
import classes from '../style/PaymentOptions.module.css'; // Импортируем CSS модуль
import { useNavigate } from 'react-router-dom';

const PaymentOptions = () => {
   const { cartItems, totalPrice, clearCart } = useContext(CartContext); // Данные корзины
   const { tableNumber } = useContext(TableContext); // Номер столика
   const [paymentMethod, setPaymentMethod] = useState(''); // Состояние для выбора метода оплаты
   const navigate = useNavigate(); // Для навигации после успешной оплаты

   const handlePaymentMethodChange = (method) => {
      setPaymentMethod(method); // Устанавливаем выбранный метод оплаты
   };

   const handlePlaceOrder = async () => {
      if (!paymentMethod) {
         alert('Please select a payment method.');
         return;
      }

      // Формируем данные заказа
      const orderData = {
         tableNumber,
         cartItems,
         totalPrice,
         paymentMethod,
      };

      try {
         // Отправляем данные заказа на MockAPI
         const response = await axios.post('https://66e6ed9f17055714e58af35c.mockapi.io/orders', orderData);

         if (response.status === 201) {
            alert('Your order has been sent successfully!');
            clearCart(); // Очищаем корзину после успешного заказа
            navigate('/success'); // Перенаправляем на страницу успеха
         } else {
            alert('An error occurred while submitting your order. Try again.');
         }
      } catch (error) {
         console.error('Error sending order:', error);
         alert('Error sending order.');
      }
   };

   return (
      <div className={classes.paymentOptions}>
         <h2>Select payment method</h2>
         <div className={classes.paymentMethods}>
            <label>
               <input
                  type="radio"
                  name="paymentMethod"
                  value="cash"
                  checked={paymentMethod === 'cash'}
                  onChange={() => handlePaymentMethodChange('cash')}
               />
               Cash
            </label>
            <label>
               <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  checked={paymentMethod === 'card'}
                  onChange={() => handlePaymentMethodChange('card')}
               />
               Card
            </label>
         </div>
         <button 
            className={classes.placeOrderButton} 
            onClick={handlePlaceOrder}
            disabled={!paymentMethod}
         >
            Place an order
         </button>
      </div>
   );
};

export default PaymentOptions;
