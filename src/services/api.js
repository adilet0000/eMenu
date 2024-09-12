export const fetchMenu = async () => {
   const response = await fetch('/api/menu');
   const data = await response.json();
   return data;
 };
 
 // Пример отправки заказа
 export const placeOrder = async (order) => {
   const response = await fetch('/api/orders', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify(order),
   });
   const data = await response.json();
   return data;
 };