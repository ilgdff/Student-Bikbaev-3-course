import React from 'react';
import { useCart } from '../../context/CartContext';
import { CartItem } from '../../types';

const Cart: React.FC = () => {
    const { items, removeFromCart, updateQuantity } = useCart();

    const calculateTotal = (items: CartItem[]): number => {
        return items.reduce((total, item) => total + item.product.price * item.quantity, 0);
    };

    if (items.length === 0) {
        return (
            <div className="cart-empty">
                <h2>Корзина пуста</h2>
                <p>Добавьте товары для оформления заказа</p>
            </div>
        );
    }

    return (
        <div className="cart-page">
            <h1>Корзина</h1>
            <div className="cart-items">
                {items.map((item) => (
                    <div key={item.product.id} className="cart-item">
                        <img 
                            src={item.product.image} 
                            alt={item.product.name} 
                            className="cart-item-image"
                        />
                        <div className="cart-item-details">
                            <h3>{item.product.name}</h3>
                            <p>{item.product.description}</p>
                        </div>
                        <div className="quantity-controls">
                            <button 
                                className="quantity-btn"
                                onClick={() => updateQuantity(item.product.id, Math.max(0, item.quantity - 1))}
                            >
                                -
                            </button>
                            <span className="quantity">{item.quantity}</span>
                            <button 
                                className="quantity-btn"
                                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            >
                                +
                            </button>
                        </div>
                        <div className="cart-item-total">
                            <p className="price">{item.product.price * item.quantity} ₽</p>
                            <button 
                                className="remove-btn"
                                onClick={() => removeFromCart(item.product.id)}
                            >
                                Удалить
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cart-summary">
                <div className="cart-total">
                    <h2>Итого:</h2>
                    <span className="total-price">{calculateTotal(items)} ₽</span>
                </div>
                <button className="checkout-btn">Оформить заказ</button>
            </div>
        </div>
    );
};

export default Cart; 