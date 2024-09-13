import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext'; // Контекст корзины
import { TableContext } from '../context/TableContext'; // Контекст столика
import axios from 'axios'; // Для отправки данных на сервер

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
         alert('Пожалуйста, выберите способ оплаты.');
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
         // Отправляем данные заказа на сервер
         const response = await axios.post('/api/order', orderData);

         if (response.status === 200) {
            alert('Ваш заказ успешно отправлен!');
            clearCart(); // Очищаем корзину после успешного заказа
            navigate('/success'); // Перенаправляем на страницу успеха
         } else {
            alert('Произошла ошибка при отправке заказа. Попробуйте снова.');
         }
      } catch (error) {
         console.error('Ошибка при отправке заказа:', error);
         alert('Ошибка при отправке заказа.');
      }
   };

   return (
      <div className="payment-options">
         <h2>Выберите способ оплаты</h2>
         <div className="payment-methods">
            <label>
               <input
                  type="radio"
                  name="paymentMethod"
                  value="cash"
                  checked={paymentMethod === 'cash'}
                  onChange={() => handlePaymentMethodChange('cash')}
               />
               Наличные
            </label>
            <label>
               <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  checked={paymentMethod === 'card'}
                  onChange={() => handlePaymentMethodChange('card')}
               />
               Карта
            </label>
         </div>
         <button className="place-order-button" onClick={handlePlaceOrder}>
            Оформить заказ
         </button>
      </div>
   );
};

export default PaymentOptions;
