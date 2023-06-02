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

import { Link } from "react-router-dom";
import { useCartCoffee } from "../../hooks/useCart";
import { formattedPrice } from "../../util/format";
import { Coffee } from "../../types";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FooterButtons } from "../../components/Card/style";
import { RiDeleteBin6Line } from "react-icons/ri";
// import { useFormContext, FieldErrors } from "react-hook-form";
import * as zod from "zod";
import { FormEvent, useState } from "react";

const orderFormSchema = zod.object({
    cep: zod
        .string().
        regex(/^\d{5}-?\d{3}$/, 'Informe o CEP no formato XXXXX-XXX'),
    street: zod.string().min(1, 'Informe a rua'),
    complement: zod.string().optional(),
    neighborhood: zod.string().min(1, 'Informe o bairro'),
    city: zod.string().min(1, 'Informe a cidade'),
    state: zod.string().length(2, 'Informe o estado'),
    number: zod
        .number({
            invalid_type_error: 'Informe um número',
        })
        .gt(0, 'Apenas número positivo'),
        'payment-ethod': zod.enum(['credit-card', 'debit-card', 'cash'], {
            invalid_type_error: 'Selecione um método de pagamento',
        }),
})

export type OrderFormSchema = zod.infer<typeof orderFormSchema>;

const Order = (): JSX.Element => {
    const { cart, removeCoffee, amountCoffee, updateCoffeeAmount } = useCartCoffee();
    const [ type, setType ] = useState('credit');
    const [street, setStreet] = useState('');
    const [streetNumber, setStreetNumber] = useState(0);
    const [neighborhood, setNeighborhood] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');
    // const { formState: { errors }, watch } = useFormContext();

    // const getErrors = (errors: FieldErrors<OrderFormSchema>) => {
    //     if(errors.cep) {return errors.cep.message}
    //     if(errors.city) {return errors.city.message}
    //     if(errors.complement) {return errors.complement.message}
    //     if(errors.neighborhood) {return errors.neighborhood.message}
    //     if(errors.number) {return errors.number.message}
    //     if(errors.state) {return errors.state.message}
    //     if(errors.street) {return errors.street.message}

    //     return false;
    // };

    // const formErrors = getErrors(errors);

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
        cart.reduce((sumTotal, coffee, entrega) => {

            return sumTotal + coffee.price * coffee.amount + entrega
        }, 0)
    )

    function handleCoffeeIncrement(coffee: Coffee) {
        updateCoffeeAmount({ coffeeId: coffee.id, amount: coffee.amount + 1 })
    }

    function handleCoffeeDecrement(coffee: Coffee) {
        updateCoffeeAmount({ coffeeId: coffee.id, amount: coffee.amount - 1 })
    }

    function handleCoffeeRemove(coffeeId: number) {
        removeCoffee(coffeeId)
    }

    function handleCreateNewOrder(event: FormEvent) {
        event.preventDefault();

        // console.log({
        //     street,
        //     streetNumber,
        //     neighborhood,
        //     city,
        //     uf,
        //     type
        // })
    }

    return (
        <Container>
            <LeftContent>
                <h3>Complete seu pedido</h3>
                <Content>
                    <Form 
                        onSubmit={handleCreateNewOrder}
                    >
                        <HeaderForm>
                            <Address>
                                <BiMap />
                                <span>Endereço de Entrega</span>
                            </Address>
                            <p>Informe o endereço onde deseja receber seu pedido</p>
                        </HeaderForm>
                        <FormBody>
                            <CpfInput
                                id="cpf-input"
                                type="text"
                                placeholder="CEP"
                                // {...register('cep')}
                            />
                            <StreetInput
                                id="street-input"
                                placeholder="Rua"
                                value={street}
                                onChange={event => setStreet(event.target.value)}
                                // {...register('street')}
                            />
                            <NumberInput
                                id="number-input"
                                placeholder="Número"
                                value={streetNumber}
                                onChange={event => setStreetNumber(Number(event.target.value))}
                                // {...register('number', { valueAsNumber: true })}
                            />
                            <ComplementInput
                                id="complement-input"
                                placeholder="Complemento"
                            />
                            <Neighborhood
                                id="neighborhood-input"
                                placeholder="Bairro"
                                value={neighborhood}
                                onChange={event => setNeighborhood(event.target.value)}
                            />
                            <CityInput
                                id="city-input"
                                placeholder="Cidade"
                                value={city}
                                onChange={event => setCity(event.target.value)}
                            />
                            <UfInput
                                id="uf-input"
                                placeholder="UF"
                                value={uf}
                                onChange={event => setUf(event.target.value)}
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
                                type="button"
                                isActive={ type === 'credit'}
                                onClick={() => { setType('credit'); }}
                            >
                                <TbCreditCard />
                                <span>Cartão de crédito</span>
                            </PaymentButton>
                            <PaymentButton
                                type="button"
                                isActive={ type === 'debit'}
                                onClick={() => { setType('debit'); }}
                            >
                                <TbCreditCard />
                                <span>cartão de débito</span>
                            </PaymentButton>
                            <PaymentButton
                                type="button"
                                isActive={ type === 'money'}
                                onClick={() => { setType('money'); }}
                            >
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

                                                <span>{amountCoffee}</span>
                                                <button
                                                    onClick={() => handleCoffeeIncrement(coffee)}
                                                    disabled={coffee.amount === 10}
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
                                    <h4>R$ {formattedPrice(coffee.price)}</h4>
                                </ContentCardCart>
                            ))
                        }
                        <div>
                            <p>Total de itens</p>
                            <p>R$ {subTotal}</p>
                        </div>

                        <div>
                            <p>Entrega</p>
                            <p>R$ {entrega}</p>
                        </div>

                        <div>
                            <h3>Total</h3>
                            <h3>R$ {total}</h3>
                        </div>
                        <button
                            type="submit"
                            className="submit-btn"
                            disabled={cart.length === 0}
                            onSubmit={handleCreateNewOrder}
                        >
                            CONFIRMAR PEDIDO
                        </button>
                    </CartFooter>
                </Cart>
            </RightContent>
        </Container>
    )
}

export default Order;