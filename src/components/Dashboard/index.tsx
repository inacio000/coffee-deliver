import { FaShoppingCart } from "react-icons/fa";
import { CartIcon, CoffeeIcon, Container, LeftContent, PackageIcon, RightContent, StepList, TimerIcon } from "./style";
import { BiPackage } from "react-icons/bi";
import { MdTimer } from "react-icons/md";
import { GiCoffeeCup } from "react-icons/gi";
import coffee from "../../assets/images/coffe.png"

export function Dashboard() {

    return (
        <Container>
            <LeftContent
                data-aos="fade-right"
            >
                <div className="coffee-title">
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                </div>
                <div className="coffee-main">
                    <StepList>
                        <li>
                            <CartIcon>
                                <FaShoppingCart />
                            </CartIcon>
                            <p>Compra simples e segura</p>
                        </li>
                        <li>
                            <PackageIcon>
                                <BiPackage />
                            </PackageIcon>
                            <p>Embalagem mantém o café intacto</p>
                        </li>
                        <li>
                            <TimerIcon>
                                <MdTimer />
                            </TimerIcon>
                            <p>Entrega rápida e rastreada</p>
                        </li>
                        <li>
                            <CoffeeIcon>
                                <GiCoffeeCup />
                            </CoffeeIcon>
                            <p>O café chega fresquinho até você</p>
                        </li>
                    </StepList>
                    <div>
                        <img src={coffee} alt="Coffee Image" />
                    </div>
                </div>
            </LeftContent>
            <RightContent
                data-aos="fade-left"
            >
                <div>
                    <img src={coffee} alt="Coffee Image" />
                </div>
            </RightContent>
        </Container>
    )
}