import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import { Product } from '../../types';
import './Home.css';

const Home: React.FC = () => {
    const promotions = [
        {
            title: "Скидка 20% на все смартфоны",
            description: "Только до конца месяца!",
            color: "#1a237e"
        },
        {
            title: "Бесплатная доставка",
            description: "При заказе от 5000 рублей",
            color: "#004d40"
        },
        {
            title: "Рассрочка 0%",
            description: "На все товары от 3000 рублей",
            color: "#b71c1c"
        }
    ];

    return (
        <div className="home-page">
            {/* Рекламные баннеры */}
            <div className="promotions">
                {promotions.map((promo, index) => (
                    <div 
                        key={index} 
                        className="promo-banner"
                        style={{ backgroundColor: promo.color }}
                    >
                        <h3>{promo.title}</h3>
                        <p>{promo.description}</p>
                    </div>
                ))}
            </div>

            {/* Популярные категории */}
            <section className="popular-categories">
                <h2>Популярные категории</h2>
                <div className="categories-grid">
                    <Link to="/products" className="category-card">
                        <div className="category-icon">📱</div>
                        <h3>Смартфоны</h3>
                    </Link>
                    <Link to="/products" className="category-card">
                        <div className="category-icon">💻</div>
                        <h3>Ноутбуки</h3>
                    </Link>
                    <Link to="/products" className="category-card">
                        <div className="category-icon">⌚</div>
                        <h3>Умные часы</h3>
                    </Link>
                    <Link to="/products" className="category-card">
                        <div className="category-icon">🎮</div>
                        <h3>Игровые приставки</h3>
                    </Link>
                </div>
            </section>

            {/* Новые поступления */}
            <section className="new-arrivals">
                <h2>Новые поступления</h2>
                <div className="products-grid">
                    {products.slice(-4).map((product) => (
                        <div key={product.id} className="product-card">
                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p className="price">{product.price} ₽</p>
                            <Link to={`/product/${product.id}`} className="view-button">
                                Подробнее
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home; 