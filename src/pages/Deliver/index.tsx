import { Container, Content, ContentLeft, Icon, Order } from "./style";
import illustration from "../../assets/icons/Illustration.svg"
import { FaMapMarkerAlt } from "react-icons/fa";

export function Deliver() {
    return (
        <Container>
            <ContentLeft>
                <div>
                    <h3>Uhu! Pedido confirmado</h3>
                    <p>Agora é só aguardar que logo o café chegará até você</p>
                </div>
                <Content>
                    <Order>
                        <ul>
                            <li>
                                <Icon className="location">
                                    <FaMapMarkerAlt />
                                </Icon>
                                <div>
                                    <p>Entrega em <span>Rua João Daniel Martinelli, 102</span></p>
                                    <p>Farrapos - Porto Alegre, RS</p>
                                </div>
                            </li>
                            <li>
                                <Icon className="timer">
                                    <FaMapMarkerAlt />
                                </Icon>
                                <div>
                                    <p>Previsão de entrega</p>
                                    <span>20 min - 30min</span>
                                </div>
                            </li>
                            <li>
                                <Icon className="money">
                                    <FaMapMarkerAlt />
                                </Icon>
                                <div>
                                    <p>Pagamento na entrega</p>
                                    <span>Cartao de Crédito</span>
                                </div>
                            </li>
                        </ul>
                    </Order>
                </Content>
            </ContentLeft>
            <div className="deliver">
                <img
                    src={illustration}
                    alt=""
                    data-aos="fade-right"
                    data-aos-duration="4000"
                />
            </div>
        </Container>
    )
}