import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Routes } from "./routes";
import { GlobalStyle } from "./styles/global";
import { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { CartProvider } from "./hooks/useCart";

export function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, [])

  return (
    <BrowserRouter>
      <CartProvider>
        <GlobalStyle />
        <Header />
        <Routes />
      </CartProvider>
    </BrowserRouter>
  );
}
