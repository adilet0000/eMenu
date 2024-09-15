import React, { useState, useContext, useEffect } from 'react';
import classes from '../style/Dish.module.css';
import menu from '../assets/Data/menu.json';
import { CartContext } from '../context/CartContext';
import SearchFilter from './SearchFilter';

export default function Dish() {
    const { addToCart } = useContext(CartContext);
    const [quantities, setQuantities] = useState(menu.map(() => 0));
    const [totalPrice, setTotalPrice] = useState(0);
    const [filteredMenu, setFilteredMenu] = useState(menu);

    const incr = (index) => {
        setQuantities((prevQuantities) => {
            const newQuantities = [...prevQuantities];
            newQuantities[index] += 1;
            return newQuantities;
        });
    };

    const decr = (index) => {
        setQuantities((prevQuantities) => {
            const newQuantities = [...prevQuantities];
            if (newQuantities[index] > 0) {
                newQuantities[index] -= 1;
            }
            return newQuantities;
        });
    };

    useEffect(() => {
        const price = filteredMenu.reduce((total, item, index) => {
            return total + item.price * quantities[index];
        }, 0);
        setTotalPrice(price);
    }, [quantities, filteredMenu]);

    const handleAddToCart = () => {
        filteredMenu.forEach((item, index) => {
            if (quantities[index] > 0) {
                addToCart(item, quantities[index]);
            }
        });

        // Сброс количества и общей суммы после добавления в корзину
        setQuantities(menu.map(() => 0));
        setTotalPrice(0);
    };

    const handleSearch = (query) => {
        const filtered = menu.filter(item =>
            item.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredMenu(filtered);
    };

    return (
        <div className={classes.container}>
            <SearchFilter onSearch={handleSearch} />

            {filteredMenu.map((item, index) => (
                <div key={item.id} className={classes.itemDiv}>
                    <div className={classes.card}>
                        <h2>{item.name}</h2>
                        <div className={classes.imgContainer}>
                            <img src={item.photo} alt={item.name} />
                        </div>
                        <p>{item.description}</p>
                        <p className={classes.price}>Price: {item.price} som</p>
                        <div className={classes.btns}>
                            <button onClick={() => decr(index)} className={classes.btn}>-</button>
                            <h1 className={classes.num}>{quantities[index]}</h1>
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
            </button>
        </div>
    );
}
