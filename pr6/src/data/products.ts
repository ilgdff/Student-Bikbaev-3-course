import { Product } from '../types';

export const products: Product[] = [
    {
        id: 1,
        name: 'Смартфон iPhone 15 Pro',
        description: 'Мощный процессор A17 Pro, тройная камера, 6.1" дисплей',
        price: 99990,
        category: 'Электроника',
        image: 'https://my-apple-store.ru/wa-data/public/shop/products/15/43/14315/images/26519/26519.500@2x.jpeg',
        characteristics: {
            basic: {
                'Экран': '6.1 дюйм',
                'Процессор': 'A17 Pro',
                'Память': '256 ГБ'
            },
            additional: {
                'Камера': '48 МП',
                'Батарея': '3200 мАч',
                'Защита': 'IP68'
            }
        }
    },
    {
        id: 2,
        name: 'Ноутбук MacBook Air M2',
        description: '13.6" Retina дисплей, чип M2, 8GB RAM, 256GB SSD',
        price: 129990,
        category: 'Электроника',
        image: 'https://lite-mobile.ru/image/cache/catalog/import_files/21/21a5d4c9102011ee83c500155db5ff04_ca9fd0ba102111ee83c500155db5ff04-1200x1200.jpg',
        characteristics: {
            basic: {
                'Экран': '13.6 дюйм',
                'Процессор': 'M2',
                'Память': '256 ГБ'
            },
            additional: {
                'ОЗУ': '8 ГБ',
                'Вес': '1.24 кг',
                'Время работы': 'до 18 часов'
            }
        }
    },
    {
        id: 3,
        name: 'Игровая консоль PlayStation 5',
        description: '4K HDR, 825GB SSD, поддержка 3D Audio',
        price: 49990,
        category: 'Электроника',
        image: 'https://ir.ozone.ru/s3/multimedia-0/c1000/6837907680.jpg',
        characteristics: {
            basic: {
                'Процессор': 'AMD Zen 2',
                'Память': '825 ГБ',
                'Разрешение': '4K'
            },
            additional: {
                'Ray Tracing': 'есть',
                'Частота': '120 Гц',
                'HDR': 'есть'
            }
        }
    },
    {
        id: 4,
        name: 'Карниз для ванной',
        price: 561,
        category: 'Товары для дома',
        description: 'Телескопический раздвижной для шторы душа',
        image: 'https://cdn.basicdecor.ru/files/media/product_photos/29/855888/original/1_12_2_0_0_994_1.jpg',
        characteristics: {
            basic: {
                'Диаметр': '2.2 см',
                'Длина': '119 см',
                'Вес': '0.75 кг'
            },
            additional: {
                'Материал': 'металл',
                'Цвет': 'серебристый',
                'Тип крепления': 'настенный',
                'Гарантия': '12 месяцев'
            }
        }
    },
    {
        id: 5,
        name: 'Смартфон Galaxy S23',
        price: 74990,
        category: 'Электроника',
        description: 'Флагманский смартфон с передовой камерой',
        image: 'https://device365.ru/upload/iblock/767/mhhcv545g7raap3rt7wplc9nwgzmbnn5.webp',
        characteristics: {
            basic: {
                'Экран': '6.1 дюйм',
                'Память': '256 ГБ',
                'Процессор': 'Snapdragon 8 Gen 2'
            },
            additional: {
                'Камера': '50 МП',
                'Батарея': '3900 мАч',
                'ОС': 'Android 13'
            }
        }
    },
    {
        id: 6,
        name: 'Ноутбук MacBook Pro',
        price: 189990,
        category: 'Электроника',
        description: 'Мощный ноутбук для профессионалов',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZzeHzPvKRqW5ydJyhVb89pVfUD1jflKchlA&s',
        characteristics: {
            basic: {
                'Экран': '14 дюймов',
                'Память': '512 ГБ',
                'Процессор': 'M2 Pro'
            },
            additional: {
                'ОЗУ': '16 ГБ',
                'Вес': '1.6 кг',
                'Время работы': 'до 18 часов'
            }
        }
    },
    {
        id: 7,
        name: 'Кофемашина DeLonghi',
        price: 45990,
        category: 'Бытовая техника',
        description: 'Автоматическая кофемашина с капучинатором',
        image: 'https://neamazon.ru/d/product_1432_1.jpg',
        characteristics: {
            basic: {
                'Мощность': '1450 Вт',
                'Давление': '15 бар',
                'Объем': '1.8 л'
            },
            additional: {
                'Тип кофе': 'зерновой/молотый',
                'Капучинатор': 'автоматический',
                'Подогрев чашек': 'есть'
            }
        }
    },
    {
        id: 8,
        name: 'Умная колонка Echo',
        price: 12990,
        category: 'Электроника',
        description: 'Умная колонка с голосовым помощником',
        image: 'https://microless.com/cdn/products/12e53dde1006982fa8617e092ba4842e-hi.jpg',
        characteristics: {
            basic: {
                'Мощность': '30 Вт',
                'Bluetooth': '5.0',
                'Wi-Fi': 'есть'
            },
            additional: {
                'Голосовой помощник': 'Alexa',
                'Управление умным домом': 'есть',
                'Мультирум': 'поддерживается'
            }
        }
    },
    {
        id: 9,
        name: 'Фитнес-браслет Mi Band',
        price: 3990,
        category: 'Электроника',
        description: 'Умный браслет для отслеживания активности',
        image: 'https://shop.9282922.ru/upload/iblock/dec/dec3a2357f1bec105bf9529942fec8ac.jpeg',
        characteristics: {
            basic: {
                'Экран': '1.1 дюйм',
                'Батарея': '125 мАч',
                'Защита': 'IP68'
            },
            additional: {
                'Пульсометр': 'есть',
                'Шагомер': 'есть',
                'Уведомления': 'есть'
            }
        }
    },
    {
        id: 10,
        name: 'Робот-пылесос Xiaomi',
        price: 29990,
        category: 'Бытовая техника',
        description: 'Умный пылесос с функцией влажной уборки',
        image: 'https://static.insales-cdn.com/images/products/1/4533/765145525/2_ucjp-xx_jpg.webp',
        characteristics: {
            basic: {
                'Мощность': '2500 Па',
                'Батарея': '5200 мАч',
                'Объем': '600 мл'
            },
            additional: {
                'Влажная уборка': 'есть',
                'Построение карты': 'есть',
                'Управление': 'приложение'
            }
        }
    },
    {
        id: 11,
        name: 'Электросамокат Kugoo',
        price: 39990,
        category: 'Электротранспорт',
        description: 'Мощный электросамокат для города',
        image: 'https://ir.ozone.ru/s3/multimedia-z/c1000/6676050311.jpg',
        characteristics: {
            basic: {
                'Мощность': '350 Вт',
                'Скорость': '25 км/ч',
                'Запас хода': '30 км'
            },
            additional: {
                'Подвеска': 'двойная',
                'Тормоза': 'дисковые',
                'Подсветка': 'LED'
            }
        }
    },
    {
        id: 12,
        name: 'Умные часы Apple Watch',
        price: 34990,
        category: 'Электроника',
        description: 'Смарт-часы с множеством функций',
        image: 'https://dr-store.ru/image/cache/catalog/demo-prostore/products/apple/watch/watch-s10/apple-watch-10-alum-dr-store-2-1000x1000.jpg',
        characteristics: {
            basic: {
                'Экран': '1.9 дюйм',
                'Память': '32 ГБ',
                'Защита': 'IP68'
            },
            additional: {
                'ЭКГ': 'есть',
                'GPS': 'есть',
                'NFC': 'есть'
            }
        }
    },
    {
        id: 13,
        name: 'Наушники Sony WH-1000XM4',
        price: 27990,
        category: 'Электроника',
        description: 'Беспроводные наушники с шумоподавлением',
        image: 'https://www.sony.ru/image/5d02da5df552836db894cead8a68f5f3?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF',
        characteristics: {
            basic: {
                'Тип': 'накладные',
                'Время работы': '30 часов',
                'Bluetooth': '5.0'
            },
            additional: {
                'Шумоподавление': 'активное',
                'Мультиподключение': 'до 2 устройств',
                'Быстрая зарядка': 'есть'
            }
        }
    },
    {
        id: 14,
        name: 'Монитор Samsung Odyssey G7',
        price: 54990,
        category: 'Электроника',
        description: 'Игровой монитор с изогнутым экраном',
        image: 'https://images.samsung.com/is/image/samsung/p6pim/ru/ls28bg700eixci/gallery/ru-odyssey-g7-g70b-467032-ls28bg700eixci-537305643?$684_547_PNG$',
        characteristics: {
            basic: {
                'Диагональ': '32 дюйма',
                'Разрешение': '2560x1440',
                'Частота': '240 Гц'
            },
            additional: {
                'Тип матрицы': 'VA',
                'HDR': 'HDR600',
                'G-Sync': 'есть'
            }
        }
    },
    {
        id: 15,
        name: 'Видеокарта RTX 4070',
        price: 64990,
        category: 'Электроника',
        description: 'Мощная игровая видеокарта',
        image: 'https://tehpos.ru/image/cache/catalog/msi/msi-geforce-rtx-4070-super-12g-gaming-x-slim-800x800.webp',
        characteristics: {
            basic: {
                'Память': '12 ГБ GDDR6X',
                'Частота': '2310 МГц',
                'TDP': '200 Вт'
            },
            additional: {
                'Ray Tracing': '3-го поколения',
                'DLSS': '3.0',
                'PCIe': '4.0'
            }
        }
    }
]; 