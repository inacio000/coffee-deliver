import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
import location from "../../assets/icons/Type=map-pin-fill.svg";
import cartImg from "../../assets/icons/Type=shopping-cart-fill.svg"
import { Container, Content, Location, Order } from "./style";
import { useCartCoffee } from "../../hooks/useCart";

export function Header() {
    const { cart } = useCartCoffee();
    const cartSize = cart.length;

    return (
        <Container>
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
                            {cartSize}
                        </span>
                        <img src={cartImg} alt="" />
                    </Order>
                </div>
            </Content>
        </Container>
    )
}