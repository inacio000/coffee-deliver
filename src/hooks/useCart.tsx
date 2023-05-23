import { ReactNode, createContext, useContext, useEffect, useRef, useState } from "react";
import { Coffee } from "../types";
import { api } from "../services/api";
import { toast } from "react-toastify";

interface CartProviderProps {
    children: ReactNode;
}

interface UpdateCoffeeAmount {
    coffeeId: number;
    amount: number;
}

interface CartContextData {
    cart: Coffee[];
    addCoffee: (coffeeId: number) => Promise<void>;
    removeCoffee: (coffeeId: number) => void;
    updateCoffeeAmount: ({ coffeeId, amount }: UpdateCoffeeAmount) => void;
}

const CartContext = createContext<CartContextData>(
    {} as CartContextData
);

export function CartProvider({ children }: CartProviderProps): JSX.Element {

    const [cart, setCart] = useState<Coffee[]>([]);

        // const storagedCart = localStorage.getItem('@RocketShoes:cart');

        // if (storagedCart) {
        // return JSON.parse(storagedCart); // Transformaando em array de produts
        // }

        // return [];

    const prevCartRef = useRef<Coffee[]>();

    useEffect(() => {
        prevCartRef.current = cart;
    })

    useEffect(() => {
        async function loadCoffees() {
            await api.get('/coffee')
                .then(response =>  setCart(response.data))
                .catch(error => console.error(error))
        }
        
        loadCoffees();
    }, [])

    // const cartPreviousValue = prevCartRef.current ?? cart;

    const addCoffee = async(coffeeId: number) => {
        try {
            const updateCart = [...cart];
            const coffeeExists = updateCart.find(coffee => coffee.id === coffeeId);

            const stock = await api.get(`/stockCoffee/${coffeeId}`);
            
            const stockAmount = stock.data.amount;
            const currentAmount = coffeeExists ? coffeeExists.amount : 0;
            const amount = currentAmount + 1;

            if (amount > stockAmount) {
                // toast.error("Apenas 10 quantidade a cada encomenda!");
                return;
            }

            if(coffeeExists) {
                coffeeExists.amount = amount;
            } else {
                const coffee = await api.get(`/coffee/${coffeeId}`);

                const newCoffee = {
                    ...coffee.data,
                    amount: 1
                }
                updateCart.push(newCoffee);
            }

            setCart(updateCart);
           
        } catch {
            // toast.error('Erro na adição do produto');
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
            // toast.error('Erro na remoção do cafe');
        }
    };

    const updateCoffeeAmount = async ({
        coffeeId,
        amount,
    }: UpdateCoffeeAmount) => {
        try {
            if(amount <= 0) {
                return;
            }

            const stock = await api.get(`/stockCoffee/${coffeeId}`);
            
            const stockAmount = stock.data.amount;

            if(amount > stockAmount) {
                // toast.error("Apenas 10 quantidade a cada encomenda!");
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
            // toast.error('Erro na remoção do cafe');
        }
    }

    return (
        <CartContext.Provider
            value={{ cart, addCoffee, removeCoffee, updateCoffeeAmount}}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCartCoffee(): CartContextData {
    const context = useContext(CartContext);

    return context;
}