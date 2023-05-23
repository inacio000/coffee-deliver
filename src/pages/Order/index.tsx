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
    PaymentButton,
    ContentCardCart
} from "./style";
import coffeeImage from "../../assets/images/Type=Expresso.png";

import { Link } from "react-router-dom";
import { useCartCoffee } from "../../hooks/useCart";
import { formattedPrice } from "../../util/format";
import { Coffee } from "../../types";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FooterButtons } from "../../components/Card/style";
import { RiDeleteBin6Line } from "react-icons/ri";

const Order = (): JSX.Element => {
    const { cart, removeCoffee, updateCoffeeAmount } = useCartCoffee();

    const cartFormatted = cart.map(coffee => ({
        ...coffee,
        priceFormatted: formattedPrice(coffee.price),
        subTotal: formattedPrice(coffee.price * coffee.amount),
        entrega: formattedPrice((coffee.price * coffee.amount) * 0.1)
    }))

    const subTotal = formattedPrice(
        cart.reduce((sumSubTotal, coffee) => {

            return sumSubTotal + (coffee.price * coffee.amount);
        }, 0)
    )

    const entrega = formattedPrice(
        cart.reduce((calculoEntrega, coffee) => {

            return calculoEntrega + ((coffee.price * coffee.amount) * 0.1);
        }, 0)
    )

    const total = formattedPrice(
        cart.reduce((sumTotal, coffee) => {

            return sumTotal + coffee.price * coffee.amount
        }, 0)
    )

    function handleCoffeeIncrement(coffee: Coffee) {
        updateCoffeeAmount({ coffeeId: coffee.id, amount: coffee.amount + 1})
    }

    function handleCoffeeDecrement(coffee: Coffee) {
        updateCoffeeAmount({ coffeeId: coffee.id, amount: coffee.amount - 1})
    }

    function handleCoffeeRemove(coffeeId: number) {
       removeCoffee(coffeeId)
    }

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
                    <CartFooter>
                        {
                            cartFormatted.map(coffee => (
                                <ContentCardCart key={coffee.id}>
                                    <img src={coffee.avatar} alt="Coffee image" />
                                    <div>
                                        <p>{coffee.typeCoffee}</p>
                                        <span>
                                            <FooterButtons>
                                                <button
                                                    onClick={() => handleCoffeeDecrement(coffee)}
                                                    disabled={coffee.amount <= 1}
                                                    type="button"
                                                >
                                                    <AiOutlineMinus />
                                                </button>
                                                
                                                <span>{coffee.amount}</span>
                                                <button
                                                    onClick={() => handleCoffeeIncrement(coffee)}
                                                    type="button"
                                                >
                                                    <AiOutlinePlus />
                                                </button>
                                            </FooterButtons>
                                            <button 
                                                onClick={() => handleCoffeeRemove(coffee.id)}
                                                type="button">
                                                <RiDeleteBin6Line />
                                                <p>REMOVER</p>
                                            </button>
                                        </span>
                                    </div>
                                    <h4>{formattedPrice(coffee.price)}</h4>
                                </ContentCardCart>
                            ))
                        }
                        <div>
                            <p>Total de itens</p>
                            <p>{subTotal}</p>
                        </div>

                        <div>
                            <p>Entrega</p>
                            <p>{entrega}</p>
                        </div>

                        <div>
                            <h3>Total</h3>
                            <h3>{total}</h3>
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

export default Order;