export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    characteristics: {
        basic: {
            [key: string]: string | number;
        };
        additional: {
            [key: string]: string | number;
        };
    };
}

export interface CartItem {
    product: Product;
    quantity: number;
}