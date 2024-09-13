import React, { createContext, useState } from 'react';

// Создаем контекст для корзины
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
   // Состояние для хранения товаров в корзине
   const [cartItems, setCartItems] = useState([]);

   // Добавление блюда в корзину
   const addToCart = (item) => {
      setCartItems((prevItems) => {
         const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);

         if (existingItem) {
            // Если блюдо уже есть в корзине, увеличиваем количество
            return prevItems.map((cartItem) =>
               cartItem.id === item.id
                  ? { ...cartItem, quantity: cartItem.quantity + 1 }
                  : cartItem
            );
         } else {
            // Если блюда еще нет в корзине, добавляем его с количеством 1
            return [...prevItems, { ...item, quantity: 1 }];
         }
      });
   };

   // Удаление блюда из корзины
   const removeFromCart = (item) => {
      setCartItems((prevItems) => {
         const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);

         if (existingItem.quantity === 1) {
            // Если количество 1, то удаляем товар из корзины
            return prevItems.filter((cartItem) => cartItem.id !== item.id);
         } else {
            // Иначе уменьшаем количество
            return prevItems.map((cartItem) =>
               cartItem.id === item.id
                  ? { ...cartItem, quantity: cartItem.quantity - 1 }
                  : cartItem
            );
         }
      });
   };

   // Очистка корзины
   const clearCart = () => {
      setCartItems([]);
   };

   // Подсчет общей стоимости
   const totalPrice = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
   );

   return (
      <CartContext.Provider
         value={{ cartItems, addToCart, removeFromCart, clearCart, totalPrice }}
      >
         {children}
      </CartContext.Provider>
   );
};
