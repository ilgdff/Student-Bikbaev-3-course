import React from 'react';
import { Product } from '../../types';
import { Link } from 'react-router-dom';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">{product.price} ₽</p>
            <Link to={`/product/${product.id}`} className="view-button">
                Подробнее
            </Link>
        </div>
    );
};

export default ProductCard;