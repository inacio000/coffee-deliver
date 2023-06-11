import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { CartProvider } from "./context/CartContext";

export function App() {
  useEffect(() => {
    AOS.init({});
  }, [])

  return (
    <BrowserRouter>
      <CartProvider>
        <GlobalStyle />
        <Router />
      </CartProvider>
    </BrowserRouter>
  );
}
