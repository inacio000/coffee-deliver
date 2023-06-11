import { FaShoppingCart } from "react-icons/fa";
import { CartIcon, CoffeeIcon, Container, Content, LeftContent, PackageIcon, RightContent, StepList, TimerIcon } from "./style";
import { BiPackage } from "react-icons/bi";
import { MdTimer } from "react-icons/md";
import { GiCoffeeCup } from "react-icons/gi";
import coffee from "../../assets/images/coffe.png"

export function Dashboard() {

    return (
        <Container>
            <Content>
                <LeftContent
                    data-aos="fade-right"
                    data-aos-duration="1500"
                >
                    <div className="coffee-title">
                        <h1>Найдите идеальный кофе для любого времени суток</h1>
                        <p>С «CoffeeDelivery» вы можете получить свой кофе в любом месте и в любое время.</p>
                    </div>
                    <div className="coffee-main">
                        <StepList>
                            <li>
                                <CartIcon>
                                    <FaShoppingCart />
                                </CartIcon>
                                <p>Простая и безопасная покупка</p>
                            </li>
                            <li>
                                <PackageIcon>
                                    <BiPackage />
                                </PackageIcon>
                                <p>Упаковка сохраняет кофе в целости</p>
                            </li>
                            <li>
                                <TimerIcon>
                                    <MdTimer />
                                </TimerIcon>
                                <p>Быстрая доставка</p>
                            </li>
                            <li>
                                <CoffeeIcon>
                                    <GiCoffeeCup />
                                </CoffeeIcon>
                                <p>Ваш кофе прибудет свежим</p>
                            </li>
                        </StepList>
                        <div>
                            <img src={coffee} alt="Coffee Image" />
                        </div>
                    </div>
                </LeftContent>
                <RightContent
                    data-aos="fade-left"
                    data-aos-duration="1500"
                >
                    <div>
                        <img src={coffee} alt="Coffee Image" />
                    </div>
                </RightContent>
            </Content>
        </Container>
    )
}