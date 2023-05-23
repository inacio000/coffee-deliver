export interface Coffee {
    id: number;
    avatar: string;
    typeCoffee: string;
    name: string;
    description: string;
    price: number;
    amount: number;
}

export interface StockCoffee {
    id: number;
    amount: number;
}