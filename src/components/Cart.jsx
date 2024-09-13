import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext'; // Контекст корзины

const Cart = () => {
   const { cartItems, addToCart, removeFromCart, totalPrice } = useContext(CartContext);

   const handleAdd = (item) => {
      addToCart(item); // Увеличиваем количество блюда
   };

   const handleRemove = (item) => {
      removeFromCart(item); // Уменьшаем количество блюда
   };

   return (
      <div className="cart">
         <h2>Ваш заказ</h2>
         {cartItems.length === 0 ? (
            <p>Ваша корзина пуста.</p>
         ) : (
            <div>
               {cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                     <img src={item.image} alt={item.name} className="cart-item-image" />
                     <div className="cart-item-details">
                        <h3>{item.name}</h3>
                        <p>{item.weight} гр.</p>
                        <div className="cart-item-controls">
                           <button onClick={() => handleRemove(item)}>-</button>
                           <span>{item.quantity}</span>
                           <button onClick={() => handleAdd(item)}>+</button>
                        </div>
                        <span className="cart-item-price">{item.price * item.quantity} с</span>
                     </div>
                  </div>
               ))}
               <div className="cart-total">
                  <h3>Итого</h3>
                  <span>{totalPrice} с</span>
               </div>
               <button className="order-button">Заказать</button>
            </div>
         )}
      </div>
   );
};

export default Cart;
