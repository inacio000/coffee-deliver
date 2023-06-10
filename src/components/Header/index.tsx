import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
import location from "../../assets/icons/Type=map-pin-fill.svg";
import cartImg from "../../assets/icons/Type=shopping-cart-fill.svg"
import { Container, Content, Location, Order } from "./style";
import { useCartCoffee } from "../../hooks/useCart";

interface HeaderProps {
    isFixed?: boolean;
}

export function Header({ isFixed = false }: HeaderProps) {
    const { cart } = useCartCoffee();
    const cartSize = cart.length;

    return (
        <Container
            className={isFixed ? 'header-fixed' : ''}
        >
            <Content>
                <Link to={"/"}>
                    <img src={logo} alt="Logo" />
                </Link>
                <div>
                    <Location>
                        <img src={location} alt="" />
                        <p>Porto Alegre, RS</p>
                    </Location>
                    <Order to={"/order"}>
                        <span>
                            {cart ? cartSize : '0'}
                        </span>
                        <img src={cartImg} alt="" />
                    </Order>
                </div>
            </Content>
        </Container>
    )
}