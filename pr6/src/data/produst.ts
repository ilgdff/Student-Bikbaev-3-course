import { Product } from '../types';

export const products: Product[] = [
    {
        id: 1,
        name: 'Карниз для ванной',
        price: 561,
        description: 'Телескопический раздвижной для шторы душа',
        image: '/images/karniz.jpg',
        characteristics: {
            basic: {
                'Диаметр': '2.2 см',
                'Длина': '119 см',
                'Вес': '0.75 кг',
            },
            additional: {
                'Материал': 'металл',
                'Цвет': 'серебристый',
                'Тип крепления': 'настенный',
                'Гарантия': '12 месяцев'
            }
        }
    },
    // etc
];