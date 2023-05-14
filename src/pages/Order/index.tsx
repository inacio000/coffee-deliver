import { BiMap } from "react-icons/bi";
import { BsCurrencyDollar } from "react-icons/bs";
import { TbCreditCard } from "react-icons/tb"
import {
    Address,
    CityInput,
    ComplementInput,
    Container,
    Content,
    CpfInput,
    Form,
    FormBody,
    HeaderForm,
    HeaderPaymen,
    LeftContent,
    NavPay,
    NumberInput,
    MethodPayment,
    RightContent,
    StreetInput,
    UfInput,
    Neighborhood,
    Cart,
    CartFooter,
    PaymentButton
} from "./style";
import { CardCart } from "../../components/CardCart";
import { Link } from "react-router-dom";
import { useCartCoffee } from "../../hooks/useCart";
import { formatedPrice } from "../../util/format";

export function Order() {
    const { cart, removeCoffee } = useCartCoffee();

    const cartFormated = cart.map(coffee => ({
        ...coffee,
        priceFormated: formatedPrice(coffee.price),
        sutotal: formatedPrice(coffee.price * coffee.amount)
    }))

    // const total = 

    return (
        <Container>
            <LeftContent>
                <h3>Complete seu pedido</h3>
                <Content>
                    <Form>
                        <HeaderForm>
                            <Address>
                                <BiMap />
                                <span>Endereço de Entrega</span>
                            </Address>
                            <p>Informe o endereço onde deseja receber seu pedido</p>
                        </HeaderForm>
                        <FormBody>
                            <CpfInput
                                className="cpf-input"
                                type="text"
                                placeholder="CEP"
                            />
                            <StreetInput
                                className="street-input"
                                type="text"
                                placeholder="Rua"
                            />
                            <NumberInput
                                className="number-input"
                                type=""
                                placeholder="Número"
                            />
                            <ComplementInput
                                className="complement-input"
                                type="text"
                                placeholder="Complemento"
                            />
                            <Neighborhood
                                className="neighborhood-input"
                                type="text"
                                placeholder="Bairro"
                            />
                            <CityInput
                                className="city-input"
                                type="text"
                                placeholder="Cidade"
                            />
                            <UfInput
                                className="uf-input"
                                type="text"
                                placeholder="UF"
                            />
                        </FormBody>
                    </Form>
                    <Form>
                        <HeaderPaymen>
                            <NavPay>
                                <BsCurrencyDollar />
                                <span>Pagamento</span>
                            </NavPay>
                            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                        </HeaderPaymen>
                        <MethodPayment>
                            <PaymentButton
                                type="button">
                                <TbCreditCard />
                                <span>Cartão de crédito</span>
                            </PaymentButton>
                            <PaymentButton
                                type="button">
                                <TbCreditCard />
                                <span>cartão de débito</span>
                            </PaymentButton>
                            <PaymentButton
                                type="button">
                                <TbCreditCard />
                                <span>dinheiro</span>
                            </PaymentButton>
                        </MethodPayment>
                    </Form>
                </Content>
            </LeftContent>

            <RightContent>
                <h3>Complete seu pedido</h3>
                <Cart>
                    <CardCart />
                    <CardCart />
                    <CardCart />
                    <CartFooter>
                        <div>
                            <p>Total de itens</p>
                            <p>R$ 29,70</p>
                        </div>

                        <div>
                            <p>Entrega</p>
                            <p>R$ 3,50</p>
                        </div>

                        <div>
                            <h3>Total</h3>
                            <h3>R$ 33,20</h3>
                        </div>
                        <Link to={"/deliver"}>
                            <button>
                                CONFIRMAR PEDIDO
                            </button>
                        </Link>
                    </CartFooter>
                </Cart>
            </RightContent>
        </Container>
    )
}