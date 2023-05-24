import { ReactNode, createContext, useEffect, useRef, useState } from "react";
import { Coffee } from "../types";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { formattedPrice } from "../util/format";

export interface NewOrder {
    id: string;
    address: {
        cep: string;
        street: string;
        phoneNumber: string;
        complement?: string;
        district: string;
        city: string;
        uf: string;
    };
    paymentMethod: string;
    itemOrdered: {
        coffeeId: string;
        coffeeName: string;
        price: number;
        amount: number;
    }[];
    totalItem: number;
    shippingPrice: number;
    orderData: Date;
}

export interface CartProviderProps {
    children: ReactNode;
}

interface UpdateCoffeeAmount {
    coffeeId: number;
    amount: number;
}

export interface CartContextData {
    cart: Coffee[];
    addCoffee: (coffeeId: number, amount: number) => Promise<void>;
    removeCoffee: (coffeeId: number) => void;
    updateCoffeeAmount: ({ coffeeId, amount }: UpdateCoffeeAmount) => void;
    addNewOrder: (data: NewOrder) => void;
}

export const CartContext = createContext<CartContextData>(
    {} as CartContextData
);

export function CartProvider({ children }: CartProviderProps): JSX.Element {

    const [cart, setCart] = useState<Coffee[]>([]);

    const prevCartRef = useRef<Coffee[]>();

    useEffect(() => {
        prevCartRef.current = cart;
    })

    // const cartPreviousValue = prevCartRef.current ?? cart;

    const addCoffee = async(coffeeId: number, amount: number) => {
        try {
            const updateCart = [...cart];
            const coffeeExists = updateCart.find(coffee => coffee.id === coffeeId);

            if(coffeeExists) {
                coffeeExists.amount = amount;
            } else {
                const coffee = await api.get(`/coffees/${coffeeId}`);

                const newCoffee = {
                    ...coffee.data,
                    amount: 1
                }
                updateCart.push(newCoffee);
            }

            setCart(updateCart);
            toast.success('Produto adicionado no carrinho!')
           
        } catch {
            toast.error('Erro na adição do produto');
        }
    };

    const removeCoffee = (coffeeId: number) => {
        try {
            const updateCart = [...cart];
            const coffeeIndex = updateCart.findIndex(coffee => coffee.id === coffeeId);

            if (coffeeIndex >= 0) {
                updateCart.splice(coffeeIndex, 1);
                setCart(updateCart);
                toast.info('Item removido do carrinho!')
            } else {
                throw Error();
            }
        } catch {
            toast.error('Erro na remoção do cafe');
        }
    };

    const updateCoffeeAmount = ({
        coffeeId,
        amount,
    }: UpdateCoffeeAmount) => {
        try {
            if(amount <= 0) {
                return;
            }

            const updateCart = [...cart];
            const coffeeExists = updateCart.find(coffee => coffee.id === coffeeId);

            if(coffeeExists) {
                coffeeExists.amount = amount;
                setCart(updateCart);
            } else {
                throw Error();
            }

        } catch {
            toast.error('Erro na remoção do cafe');
        }
    }

    const addNewOrder = (data: NewOrder) => {
        return data;
    }

    return (
        <CartContext.Provider
            value={{ cart, addCoffee, removeCoffee, updateCoffeeAmount, addNewOrder}}
        >
            {children}
        </CartContext.Provider>
    );
}