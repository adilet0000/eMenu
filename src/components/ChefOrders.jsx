import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ChefOrders = () => {
   const [chefOrders, setChefOrders] = useState([]); // Локальное состояние для заказов
   const [loading, setLoading] = useState(true); // Состояние для отслеживания загрузки

   // Функция для загрузки заказов с MockAPI
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

   useEffect(() => {
      fetchOrders(); // Вызываем функцию загрузки при рендере компонента

      // Обновление данных через определенный интервал (например, каждые 10 секунд)
      const intervalId = setInterval(fetchOrders, 10000); // 10 секунд

      // Очищаем интервал при размонтировании компонента
      return () => clearInterval(intervalId);
   }, []); // Пустой массив зависимостей, чтобы запрос выполнялся только при первой загрузке компонента

   const handleDeleteOrder = async (orderId) => {
      try {
         await axios.delete(`https://66e6ed9f17055714e58af35c.mockapi.io/orders/${orderId}`);
         // Обновляем список заказов после удаления
         setChefOrders(chefOrders.filter(order => order.id !== orderId));
      } catch (error) {
         console.error('Failed to delete order', error);
      }
   };

   if (loading) {
      return <p>Loading orders...</p>; // Показываем сообщение о загрузке, пока данные не получены
   }

   return (
      <div>
         <h2>Orders</h2>
         {chefOrders.length > 0 ? (
            chefOrders.map((order) => (
               <div key={order.id}>
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
                  <button onClick={() => handleDeleteOrder(order.id)}>Delete Order</button>
               </div>
            ))
         ) : (
            <p>No orders yet.</p>
         )}
      </div>
   );
};

export default ChefOrders;
