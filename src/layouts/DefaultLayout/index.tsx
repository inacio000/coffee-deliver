import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../../components/Header";

export function DefaultLayout() {
    const location = useLocation();

    return (
        <>
            <Header isFixed={location.pathname === '/' && true}/>
            <Outlet />
        </>
    )
}