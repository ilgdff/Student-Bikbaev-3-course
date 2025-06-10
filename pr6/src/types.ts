interface Characteristics {
    basic: {
        [key: string]: string;
    };
    additional: {
        [key: string]: string;
    };
}

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    category?: string;
    image: string;
    characteristics?: Characteristics;
}

export interface CartItem {
    product: Product;
    quantity: number;
} 