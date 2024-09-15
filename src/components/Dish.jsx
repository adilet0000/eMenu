import React, { useState, useContext, useEffect } from 'react';
import classes from '../style/Dish.module.css';
import menu from '../assets/Data/menu.json';
import { CartContext } from '../context/CartContext'; // Импортируем контекст корзины
import SearchFilter from './SearchFilter'; // Импортируем компонент фильтра

export default function Dish() {
    const { addToCart } = useContext(CartContext); // Получаем функцию добавления в корзину из контекста
    const [quantities, setQuantities] = useState(menu.map(() => 0)); // Состояние для количества каждого блюда
    const [totalPrice, setTotalPrice] = useState(0); // Состояние для общей стоимости
    const [filteredMenu, setFilteredMenu] = useState(menu); // Состояние для фильтрованных блюд

    // Функция увеличения количества
    const incr = (index) => {
        setQuantities((prevQuantities) => {
            const newQuantities = [...prevQuantities];
            newQuantities[index] += 1;
            return newQuantities;
        });
    };

    // Функция уменьшения количества
    const decr = (index) => {
        setQuantities((prevQuantities) => {
            const newQuantities = [...prevQuantities];
            if (newQuantities[index] > 0) {
                newQuantities[index] -= 1;
            }
            return newQuantities;
        });
    };

    // Обновляем общую стоимость при каждом изменении количества
    useEffect(() => {
        const price = filteredMenu.reduce((total, item, index) => {
            return total + item.price * quantities[index];
        }, 0);
        setTotalPrice(price);
    }, [quantities, filteredMenu]);

    // Функция для добавления всех выбранных товаров в корзину
    const handleAddToCart = (event) => {
        filteredMenu.forEach((item, index) => {
            if (quantities[index] > 0) {
                addToCart(item, quantities[index]); // Добавляем только те товары, которые были выбраны
            }
        });
        event.target.innerText = `Add to Cart - 0 som`;
    };

    // Функция для фильтрации блюд
    const handleSearch = (query) => {
        const filtered = menu.filter(item =>
            item.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredMenu(filtered); // Обновляем состояние фильтрованных блюд
    };

    return (
        <div className={classes.container}>
            <SearchFilter onSearch={handleSearch} /> {/* Добавляем компонент поиска */}
            
            {filteredMenu.map((item, index) => (
                <div className={classes.itemDiv}>
                    <div key={item.id} className={classes.card}>
                        <h2>{item.name}</h2>
                        <img src={item.photo} alt={item.name} />
                        <p>{item.description}</p>
                        <p className={classes.price}>Price: {item.price} som</p>
                        <div className={classes.btns}>
                            <button onClick={() => decr(index)} className={classes.btn}>-</button>
                            <h1 className={classes.num}>{quantities[index]}</h1> {/* Отображаем текущее количество */}
                            <button onClick={() => incr(index)} className={classes.btn}>+</button>
                        </div>
                    </div>

                </div>
            ))}

            <button 
                onClick={handleAddToCart} 
                className={classes.addToCartButton}
            >
                Add to Cart - {totalPrice.toFixed(2)} som
            </button> {/* Общая сумма отображается на кнопке */}
        </div>
    );
}
