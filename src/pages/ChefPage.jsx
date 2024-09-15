import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../style/ChefPage.module.css'; // Импортируем стили

const ChefOrders = () => {
   const [chefOrders, setChefOrders] = useState([]); // Локальное состояние для хранения заказов
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

   // Функция для удаления заказа
   const handleDeleteOrder = async (orderId) => {
      try {
         await axios.delete(`https://66e6ed9f17055714e58af35c.mockapi.io/orders/${orderId}`); // Удаляем заказ на сервере
         setChefOrders((prevOrders) => prevOrders.filter(order => order.id !== orderId)); // Удаляем заказ из локального состояния
      } catch (error) {
         console.error('Failed to delete order', error);
      }
   };

   useEffect(() => {
      fetchOrders(); // Вызываем функцию загрузки заказов при рендере компонента

      // Обновление данных через определенный интервал (например, каждые 10 секунд)
      const intervalId = setInterval(fetchOrders, 10000); // 10 секунд

      // Очищаем интервал при размонтировании компонента
      return () => clearInterval(intervalId);
   }, []); // Пустой массив зависимостей, чтобы запрос выполнялся только при первой загрузке компонента

   if (loading) {
      return <p className={styles.loading}>Loading orders...</p>; // Показываем сообщение о загрузке, пока данные не получены
   }

   return (
      <div className={styles.container}>
         <h2 className={styles.header}>Orders</h2>
         {chefOrders.length > 0 ? (
            chefOrders.map((order) => (
               <div key={order.id} className={styles.order}>
                  <h3>Table {order.tableNumber}</h3>
                  {order.cartItems.map((item) => (
                     <div key={item.id} className={styles.orderDetails}>
                        <img src={item.photo} alt={item.name} />
                        <div>
                           <p>Name: {item.name}</p>
                           <p>Price: {item.price}</p>
                           <p>Quantity: {item.quantity}</p>
                        </div>
                     </div>
                  ))}
                  <p className={styles.orderSummary}>Total Price: {order.totalPrice}</p>
                  <p className={styles.orderSummary}>Payment Method: {order.paymentMethod}</p>
                  <button className={styles.deleteButton} onClick={() => handleDeleteOrder(order.id)}>Delete Order</button>
               </div>
            ))
         ) : (
            <p className={styles.loading}>No orders yet.</p>
         )}
      </div>
   );
};

export default ChefOrders;
