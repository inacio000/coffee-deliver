export interface Coffee {
    id: string;
    avatar: string;
    typeCoffee: string[];
    name: string;
    description: string;
    price: number;
    amount: number;
}

export interface OrderFormData {
    cep: string;
    street: string;
    complement?: string;
    neighborhood: string;
    city: string;
    state: string;
    streetNumber: string;
    paymentMethod: string;
}