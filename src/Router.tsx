import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Order } from "./pages/Order";
import { Deliver } from "./pages/Deliver";
import { DefaultLayout } from "./layouts/DefaultLayout";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="order" element={<Order />} />
                <Route path="order/deliver" element={<Deliver />} />
            </Route>
        </Routes>
    )
}
