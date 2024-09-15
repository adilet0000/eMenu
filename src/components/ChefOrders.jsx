import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ChefOrders = () => {
   const [chefOrders, setChefOrders] = useState([]); // Локальное состояние для заказов
   const [loading, setLoading] = useState(true); // Состояние для отслеживания загрузки

   useEffect(() => {
      // Загружаем заказы с MockAPI
      const fetchOrders = async () => {
         try {
            const response = await axios.get('https://66e6ed9f17055714e58af35c.mockapi.io/orders'); // Замените на ваш URL MockAPI
            setChefOrders(response.data); // Устанавливаем заказы в локальное состояние
         } catch (error) {
            console.error('Failed to fetch orders', error);
         } finally {
            setLoading(false); // Отключаем состояние загрузки
         }
      };

      fetchOrders(); // Вызываем функцию загрузки при рендере компонента
   }, []); // Пустой массив зависимостей, чтобы запрос выполнялся только при первой загрузке компонента

   if (loading) {
      return <p>Loading orders...</p>; // Показываем сообщение о загрузке, пока данные не получены
   }

   return (
      <div>
         <h2>Orders</h2>
         {chefOrders.length > 0 ? (
            chefOrders.map((order, index) => (
               <div key={index}>
                  <h3>Table {order.tableNumber}</h3>
                  {order.cartItems.map((item) => (
                     <div key={item.id}>
                        <img src={item.photo} alt={item.name} />
                        <p>Name: {item.name}</p>
                        <p>Price: {item.price}</p>
                        <p>Quantity: {item.quantity}</p>
                     </div>
                  ))}
                  <p>Total Price: {order.totalPrice}</p>
                  <p>Payment Method: {order.paymentMethod}</p>
               </div>
            ))
         ) : (
            <p>No orders yet.</p>
         )}
      </div>
   );
};

export default ChefOrders;
