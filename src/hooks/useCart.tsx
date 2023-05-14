import { ReactNode, createContext, useContext, useState } from "react";
import { Coffee } from "../types";
import { api } from "../services/api";
import { toast } from "react-toastify";

interface CartProviderProps {
    children: ReactNode;
}

interface UpdateProvideAmount {
    coffeeId: number;
    amount: number;
}

interface CartContextData {
    cart: Coffee[];
    addCoffee: (coffeeId: number) => Promise<void>;
    removeCoffee: (coffeeId: number) => void;
}

const CartContext = createContext<CartContextData>(
    {} as CartContextData
);

export function CartProvider({ children }: CartProviderProps): JSX.Element {

    const [cart, setCart] = useState<Coffee[]>([])

    const addCoffee = async(coffeeId: number) => {
        try {
            const updateCart = [...cart];
            const coffeeExists = updateCart.findIndex(coffee => coffee.id === coffeeId);

            const coffee = await api.get(`/coffee/${coffeeId}`)            
            const newCoffee = {
                ...coffee.data,
                amount: 1
            }
            updateCart.push(newCoffee);
            setCart(updateCart);
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
            } else {
                throw Error();
            }
        } catch {
            toast.error('Erro na remoção do produto');
        }
    };

    return (
        <CartContext.Provider
            value={{ cart, addCoffee, removeCoffee}}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCartCoffee(): CartContextData {
    const context = useContext(CartContext);

    return context;
}