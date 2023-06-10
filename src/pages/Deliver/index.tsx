import { Container, Content, ContentLeft, Icon, Order } from "./style";
import illustration from "../../assets/icons/Illustration.svg"
import { FaMapMarkerAlt } from "react-icons/fa";
import { NewOrderFormData } from "../Order";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { formattedPrice } from "../../util/format";
import { LocationType } from "../../types";
import { PaymentMethods, paymentMethods } from "../../components/FormOrder/PaymentMethods";
import { useEffect } from "react";

export function Deliver() {
    const { state } = useLocation() as unknown as LocationType;
    const navigate = useNavigate();

    useEffect(() => {
        {
            if(!state) {
                navigate("/")
            }
        }
    }, []);

    if(!state) return <></>

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
                                    <p>Entrega em <span>{`${state.street}, ${state.streetNumber}`}</span></p>
                                    <p>{`${state.cep} - ${state.city} / ${state.state}`}</p>
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
                                    <span>{paymentMethods[state.paymentMethod].label}</span>
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
                    data-aos-duration="10000"
                />
            </div>
        </Container>
    )
}