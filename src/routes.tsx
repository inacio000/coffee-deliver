import { BrowserRouter, Routes as Switch, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Order } from "./pages/Order";
import { Deliver } from "./pages/Deliver";

export function Routes() {
    return (
        <Switch>
            <Route path="/home" element={<Home />} />
            <Route path="/order" element={<Order />} />
            <Route path="/deliver" element={<Deliver />} />

            <Route path="*" element={<Navigate to="/home" />} />
        </Switch>
    )
}
