import React, { createContext, useContext, useState } from 'react';
import { Product, CartItem } from '../types';
import { products } from '../data/products';

interface CartContextType {
    items: CartItem[];
    addToCart: (productId: number) => void;
    removeFromCart: (productId: number) => void;
    updateQuantity: (productId: number, quantity: number) => void;
}

const CartContext = createContext<CartContextType>({
    items: [],
    addToCart: () => {},
    removeFromCart: () => {},
    updateQuantity: () => {},
});

export const useCart = () => useContext(CartContext);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [items, setItems] = useState<CartItem[]>([]);

    const addToCart = (productId: number) => {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        setItems(currentItems => {
            const existingItem = currentItems.find(item => item.product.id === productId);
            if (existingItem) {
                return currentItems.map(item =>
                    item.product.id === productId
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...currentItems, { product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId: number) => {
        setItems(currentItems => currentItems.filter(item => item.product.id !== productId));
    };

    const updateQuantity = (productId: number, quantity: number) => {
        if (quantity === 0) {
            removeFromCart(productId);
            return;
        }

        setItems(currentItems =>
            currentItems.map(item =>
                item.product.id === productId
                    ? { ...item, quantity }
                    : item
            )
        );
    };

    return (
        <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
}; 