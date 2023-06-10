import { Container, Content, ContentLeft, Icon, Order } from "./style";
import illustration from "../../assets/icons/Illustration.svg"
import { FaMapMarkerAlt } from "react-icons/fa";
import { NewOrderFormData } from "../Order";
import { Navigate } from "react-router-dom";
import { NewOrder } from "../../context/CartContext";
import { formattedPrice } from "../../util/format";

export function Deliver() {
    const order: NewOrder | null = JSON.parse(
        `${localStorage.getItem('@CoffeeDeliver:order')}`,
    )

    if (!order) {
        return <Navigate to="/" />
    }

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
                                    <p>Entrega em <span>{`${order?.address.street}, ${order?.address.streetNumber}`}</span></p>
                                    <p>{`${order?.address.cep} - ${order?.address.city} / ${order?.address.state}`}</p>
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
                                    <br/>
                                    <span>{`R$ ${formattedPrice(
                                        order?.totalItem + order?.shippingPrice ,
                                    )} - ${order.paymentMethod}`}</span>
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