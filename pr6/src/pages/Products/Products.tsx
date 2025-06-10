import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import { Product } from '../../types';

const Products: React.FC = () => {
    return (
        <div className="products-page">
            <h1>Наши товары</h1>
            <div className="products-grid">
                {products.map((product: Product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p className="description">{product.description}</p>
                        <p className="price">{product.price} ₽</p>
                        <Link to={`/product/${product.id}`} className="view-button">
                            Подробнее
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products; 