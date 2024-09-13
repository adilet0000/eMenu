import React from 'react';
import ChefOrders from '../components/ChefOrders'; // Компонент для отображения заказов

const ChefPage = () => {
   return (
      <div className="chef-page">
         <header>
            <h1>Заказы на кухне</h1>
         </header>

         <main>
            <section className="orders-section">
               <ChefOrders /> {/* Отображаем список всех заказов */}
            </section>
         </main>
      </div>
   );
};

export default ChefPage;
