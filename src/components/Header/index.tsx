import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
import location from "../../assets/icons/Type=map-pin-fill.svg";
import cart from "../../assets/icons/Type=shopping-cart-fill.svg"
import { Container, Content, Location, Order } from "./style";

export function Header() {
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
                        <span>0</span>
                        <img src={cart} alt="" />
                    </Order>
                </div>
            </Content>
        </Container>
    )
}