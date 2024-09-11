import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/homePage/HomePage';
import { MenuPage } from './pages/menuPage/MenuPage';
import { CartPage } from './pages/cartPage/CartPage';
import { OrderConfirmationPage } from './pages/orderConfirmationPage/OrderConfirmationPage';
import { ChefDashboardPage } from './pages/chefDashboardPage/ChefDashboardPage';

// import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu/:tableId" element={<MenuPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
        <Route path="/chef-dashboard" element={<ChefDashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;