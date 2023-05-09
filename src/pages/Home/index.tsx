import { CartIcon, CoffeeIcon, Container, LeftContent, PackageIcon, RightContent, StepList, TimerIcon } from "./style";
import coffee from "../../assets/images/coffe.png";
import { FaShoppingCart } from "react-icons/fa";
import { BiPackage } from "react-icons/bi";
import { MdTimer } from "react-icons/md";
import { GiCoffeeCup } from "react-icons/gi";

export function Home() {
    return (
        <Container>
            <LeftContent>
                <div className="coffee-title">
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                </div>
                <StepList>
                    <li>
                        <CartIcon>
                            <FaShoppingCart/>
                        </CartIcon>
                        <p>Compra simples e segura</p>
                    </li>
                    <li>
                        <PackageIcon>
                            <BiPackage/>
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
            </LeftContent>
            <RightContent>
                <div>
                    <img src={coffee} alt="Coffee Image" />
                </div>
            </RightContent>
        </Container>
    )
}