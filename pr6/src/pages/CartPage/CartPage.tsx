import React, { useState } from 'react';
import { CartItem } from '../../types';

interface CartPageProps {
    items: CartItem[];
    updateQuantity: (productId: number, quantity: number) => void;
}

const CartPage: React.FC<CartPageProps> = ({ items, updateQuantity }) => {
    const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

    return (
        <div className="cart-page">
            <h1>Корзина</h1>
            {items.map(item => (
                <div key={item.product.id} className="cart-item">
                    <img src={item.product.image} alt={item.product.name} />
                    <div className="item-info">
                        <h3>{item.product.name}</h3>
                        <p className="price">{item.product.price} ₽</p>
                    </div>
                    <div className="quantity-controls">
                        <button 
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                        >
                            -
                        </button>
                        <span>{item.quantity}</span>
                        <button 
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        >
                            +
                        </button>
                    </div>
                    <p className="item-total">{item.product.price * item.quantity} ₽</p>
                </div>
            ))}
            <div className="cart-total">
                <h2>Итого: {total} ₽</h2>
                <button className="checkout-button">Оформить заказ</button>
            </div>
        </div>
    );
};

export default CartPage;