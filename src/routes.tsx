import { Routes as Switch, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import Order from "./pages/Order";
import { Deliver } from "./pages/Deliver";

export function Routes() {
    return (
        <Switch>
            <Route path="/" element={<Home />} />
            <Route path="/order" element={<Order />} />
            <Route path="order/deliver" element={<Deliver />} />

            <Route path="*" element={<Navigate to="/home" />} />
        </Switch>
    )
}
