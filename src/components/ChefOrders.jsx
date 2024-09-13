import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ChefOrders = () => {
   const [orders, setOrders] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   // Получение всех заказов с сервера
   useEffect(() => {
      const fetchOrders = async () => {
         try {
            const response = await axios.get('/api/orders');
            setOrders(response.data);
         } catch (err) {
            setError('Ошибка при загрузке заказов');
            console.error(err);
         } finally {
            setLoading(false);
         }
      };

      fetchOrders();
   }, []);

   // Отмечаем заказ как выполненный
   const markAsCompleted = async (orderId) => {
      try {
         await axios.patch(`/api/orders/${orderId}`, { status: 'completed' });
         setOrders((prevOrders) =>
            prevOrders.map((order) =>
               order.id === orderId ? { ...order, status: 'completed' } : order
            )
         );
         alert('Заказ отмечен как выполненный!');
      } catch (err) {
         console.error('Ошибка при обновлении статуса заказа:', err);
         alert('Не удалось отметить заказ как выполненный');
      }
   };

   if (loading) {
      return <p>Загрузка заказов...</p>;
   }

   if (error) {
      return <p>{error}</p>;
   }

   return (
      <div className="chef-orders">
         <h2>Заказы</h2>
         {orders.length === 0 ? (
            <p>Заказов пока нет.</p>
         ) : (
            orders.map((order) => (
               <div key={order.id} className="order-item">
                  <h3>Столик №{order.tableNumber}</h3>
                  <ul>
                     {order.cartItems.map((item) => (
                        <li key={item.id}>
                           {item.name} – {item.quantity} шт.
                        </li>
                     ))}
                  </ul>
                  <p>Итоговая стоимость: {order.totalPrice} с</p>
                  <p>Статус: {order.status === 'completed' ? 'Выполнен' : 'В ожидании'}</p>
                  {order.status !== 'completed' && (
                     <button onClick={() => markAsCompleted(order.id)}>
                        Отметить как выполненный
                     </button>
                  )}
               </div>
            ))
         )}
      </div>
   );
};

export default ChefOrders;
