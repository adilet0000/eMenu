import React, { useContext } from 'react';
import Cart from '../components/Cart'; // Компонент для отображения корзины
import OrderSummary from '../components/OrderSummary'; // Компонент итогов заказа
import { CartContext } from '../context/CartContext'; // Контекст корзины
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
   const { cartItems } = useContext(CartContext); // Получаем данные корзины из контекста
   const navigate = useNavigate();

   const handleProceedToPayment = () => {
      if (cartItems.length === 0) {
         alert('Ваша корзина пуста. Пожалуйста, добавьте блюда.');
         return;
      }
      navigate('/payment'); // Переход на страницу оплаты
   };

   return (
      <div className="cart-page">
         <header>
            <h1>Ваша корзина</h1>
         </header>

         <main>
            <section className="cart-items-section">
               <Cart /> {/* Отображаем содержимое корзины */}
            </section>

            <aside className="order-summary-section">
               <OrderSummary /> {/* Отображаем итоговую стоимость заказа */}
               <button
                  className="proceed-to-payment-button"
                  onClick={handleProceedToPayment}
                  disabled={cartItems.length === 0}
               >
                  Перейти к оплате
               </button>
            </aside>
         </main>
      </div>
   );
};

export default CartPage;
