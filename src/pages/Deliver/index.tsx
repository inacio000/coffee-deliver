import { Container, Content, ContentLeft, Icon, Order } from "./style";
import illustration from "../../assets/icons/Illustration.svg"
import { FaMapMarkerAlt } from "react-icons/fa";
import { NewOrderFormData } from "../Order";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { formattedPrice } from "../../util/format";
import { LocationType } from "../../types";
import { paymentMethods } from "../../components/FormOrder/PaymentMethods";
import { useEffect } from "react";

export function Deliver() {
    const { state } = useLocation() as unknown as LocationType;
    const navigate = useNavigate();

    useEffect(() => {
        {
            if (!state) {
                navigate("/")
            }
        }
    }, []);

    if (!state) return <></>

    return (
        <Container>
            <ContentLeft>
                <div>
                    <h3>Ххм! Заказ подтвержден.</h3>
                    <p>Теперь просто подождите, пока кофе скоро прибудет к вам</p>
                </div>
                <Content>
                    <Order>
                        <ul>
                            <li>
                                <Icon className="location">
                                    <FaMapMarkerAlt />
                                </Icon>
                                <div>
                                    <p>Доставка по <span>{`${state.street}, ${state.streetNumber}`}</span></p>
                                    <p>{`${state.cep} - ${state.city} / ${state.state}`}</p>
                                </div>
                            </li>
                            <li>
                                <Icon className="timer">
                                    <FaMapMarkerAlt />
                                </Icon>
                                <div>
                                    <p>Доставка прибывает через...</p>
                                    <span>20мин - 30мин</span>
                                </div>
                            </li>
                            <li>
                                <Icon className="money">
                                    <FaMapMarkerAlt />
                                </Icon>
                                <div>
                                    <p>Оплата при доставке</p>
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
                    data-aos-duration="2000"
                    data-aos-offset="100"
                    data-aos-delay="10"
                    data-aos-easing="ease-in"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="left"
                />
            </div>
        </Container>
    )
}