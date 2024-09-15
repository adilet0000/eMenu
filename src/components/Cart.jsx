import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext'; // Контекст корзины
import classes from '../style/Cart.module.css';
import { PiEmpty } from "react-icons/pi";

const Cart = () => {
    const { cartItems, addToCart, removeFromCart, totalPrice } = useContext(CartContext);

    const handleAdd = (item) => {
        addToCart(item); // Увеличиваем количество блюда
    };

    const handleRemove = (item) => {
        if (item.quantity === 1) {
            removeFromCart(item, true); // Передаем флаг для удаления блюда
        } else {
            removeFromCart(item); // Уменьшаем количество блюда
        }
    };

    return (
        <div className={classes.cart}>
            <h1 className={classes.cartTitle}>Your order</h1>
            {cartItems.length === 0 ? (
                <div>
                    <h2 className={classes.cartEmpty}>Your cart is empty :(</h2>
                    <PiEmpty className={classes.empty} />
                </div>
            ) : (
                <div>
                    {cartItems.map((item) => (
                        <div key={item.id} className={classes.cartItem}>
                            <img src={item.photo} alt={item.name} className={classes.cartItemImage} />
                            <div className={classes.cartItemDetails}>
                                <h3>{item.name}</h3>
                                <div className={classes.cartItemControls}>
                                    <button onClick={() => handleRemove(item)}>-</button>
                                    <span className={classes.number}>{item.quantity}</span>
                                    <button onClick={() => handleAdd(item)}>+</button>
                                </div>
                                <span className={classes.cartItemPrice}>{item.price * item.quantity} som</span>
                            </div>
                        </div>
                    ))}
                    <div className={classes.cartTotal}>
                        <h3>Total</h3>
                        <span>{totalPrice} som</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
