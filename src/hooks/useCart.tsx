import { useContext } from "react";
import { CartContext, CartContextData } from "../context/CartContext";

export function useCartCoffee(): CartContextData {
    const context = useContext(CartContext);

    return context;
}