import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Routes } from "./routes";
import { GlobalStyle } from "./styles/global";
import { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'

export function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, [])

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes />
    </BrowserRouter>
  );
}
