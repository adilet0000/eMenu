import React, { useContext } from 'react';
import Cart from '../components/Cart';
import OrderSummary from '../components/OrderSummary';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
// Удалите импорт стилей для тестирования
// import classes from '../style/CartPage.module.css'; 

const CartPage = () => {
   const { cartItems } = useContext(CartContext);
   const navigate = useNavigate();

   const handleProceedToPayment = () => {
      if (cartItems.length === 0) {
         alert('Ваша корзина пуста. Пожалуйста, добавьте блюда.');
         return;
      }
      navigate('/payment');
   };

   return (
      <div className="cart-page">
         <main>
            <section className="cart-items-section">
               <Cart />
            </section>

            <aside className="order-summary-section">
               <OrderSummary />
            </aside>
         </main>
      </div>
   );
};

export default CartPage;
