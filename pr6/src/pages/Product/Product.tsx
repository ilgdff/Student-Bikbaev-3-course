import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../data/products';
import { Product as ProductType } from '../../types';
import { useCart } from '../../context/CartContext';

const Product: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [showAllCharacteristics, setShowAllCharacteristics] = useState(false);
    const { addToCart } = useCart();
    
    const product = products.find((p: ProductType) => p.id === Number(id));

    if (!product) {
        return <div>Товар не найден</div>;
    }

    const handleAddToCart = () => {
        addToCart(product.id);
    };

    return (
        <div className="product-page">
            <div className="product-main">
                <img src={product.image} alt={product.name} />
                <div className="product-info">
                    <h1>{product.name}</h1>
                    <p className="description">{product.description}</p>
                    <p className="price">{product.price} ₽</p>
                    <button onClick={handleAddToCart} className="add-to-cart">
                        Добавить в корзину
                    </button>
                </div>
            </div>

            {product.characteristics && (
                <div className="characteristics">
                    <h2>Характеристики</h2>
                    {Object.entries(product.characteristics.basic).map(([key, value]) => (
                        <div key={key} className="characteristic-item">
                            <span>{key}</span>
                            <span>{String(value)}</span>
                        </div>
                    ))}

                    <button 
                        className="show-more"
                        onClick={() => setShowAllCharacteristics(!showAllCharacteristics)}
                    >
                        {showAllCharacteristics ? 'Скрыть' : 'Показать все характеристики'}
                    </button>

                    {showAllCharacteristics && (
                        <div className="additional-characteristics">
                            {Object.entries(product.characteristics.additional).map(([key, value]) => (
                                <div key={key} className="characteristic-item">
                                    <span>{key}</span>
                                    <span>{String(value)}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Product;