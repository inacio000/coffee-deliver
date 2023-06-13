import { ReactNode, createContext, useEffect, useRef, useState } from "react";
import { Coffee } from "../types";
import { toast } from "react-toastify";
import { coffees } from "../coffeeData/cooffees";

export interface CartProviderProps {
    children: ReactNode;
}

interface UpdateCoffeeAmount {
    coffeeId: string;
    amount: number;
}

export interface CartContextData {
    cart: Coffee[];
    addCoffee: (coffeeId: string, amount: number) => Promise<void>;
    removeCoffee: (coffeeId: string) => void;
    updateCoffeeAmount: ({ coffeeId, amount }: UpdateCoffeeAmount) => void;
    clearCart: () => void;
}

export const CartContext = createContext<CartContextData>(
    {} as CartContextData
);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
    const [cart, setCart] = useState<Coffee[]>(() => {
        const storageCart = localStorage.getItem('@CoffeeDelivery:cart')

        if (storageCart) {
            return JSON.parse(storageCart);
        }

        return [];
    });

    const prevCartRef = useRef<Coffee[]>();

    useEffect(() => {
        prevCartRef.current = cart
    })

    const cartPreviousValue = prevCartRef.current ?? cart;

    useEffect(() => {
        if (cartPreviousValue !== cart) {
            localStorage.setItem('@CoffeeDelivery:cart', JSON.stringify(cart));
        }
    }, [cart, cartPreviousValue])

    // console.log(cart.map(cofe => cofe.amount))

    async function addCoffee(coffeeId: string, amount: number) {
        try {
          const updateCart = [...cart];
          const coffeeExists = updateCart.find((coffee) => coffee.id === coffeeId);
      
          if (coffeeExists) {
            coffeeExists.amount += amount;
          } else {
            const coffee = coffees.find((coffee) => coffee.id === coffeeId, 10);
      
            if (coffee) {
              const newCoffee = {
                ...coffee,
                amount,
              };
              updateCart.push(newCoffee);
            } else {
              throw new Error();
            }
          }
      
          setCart(updateCart);
          toast.success('Produto adicionado no carrinho!');
        } catch {
          toast.error('Erro na adição do produto');
        }
    };

    function removeCoffee(coffeeId: string) {
        try {
          const updateCart = [...cart];
          const coffeeIndex = updateCart.findIndex((coffee) => coffee.id === coffeeId);
      
          if (coffeeIndex >= 0) {
            updateCart.splice(coffeeIndex, 1);
            setCart(updateCart);
            toast.info('Item removido do carrinho!');
          } else {
            throw new Error();
          }
        } catch {
          toast.error('Erro na remoção do cafe');
        }
    };

    function updateCoffeeAmount({ coffeeId, amount }: UpdateCoffeeAmount) {
        try {
          if (amount <= 0 || amount > 10) {
            return;
          }
      
          const updateCart = [...cart];
          const coffeeExists = updateCart.find((coffee) => coffee.id === coffeeId);
      
          if (coffeeExists) {
            coffeeExists.amount = amount;
            setCart(updateCart);
          } else {
            throw new Error();
          }
        } catch {
          toast.error('Erro na atualização do cafe');
        }
    };

    function clearCart() {
        setCart([]);
    }

    return (
        <CartContext.Provider
            value={{ cart, addCoffee, removeCoffee, updateCoffeeAmount, clearCart }}
        >
            {children}
        </CartContext.Provider>
    );
}