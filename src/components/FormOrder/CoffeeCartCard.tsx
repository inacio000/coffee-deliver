import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useCartCoffee } from "../../hooks/useCart";
import { Cart, CartFooter, ContentCardCart, RightContent } from "../../pages/Order/style";
import { formattedPrice } from "../../util/format";
import { FooterButtons } from "../Card/style";
import { RiDeleteBin6Line } from "react-icons/ri";

interface CoffeeProduct {
    id: string;
    name: string;
    avatar: string;
    price: number;
    amount: number;
}

export function CoffeeCartCard() {
    const { cart, removeCoffee, updateCoffeeAmount } = useCartCoffee();

    const cartFormatted = cart.map(coffee => ({
        ...coffee,
        priceFormatted: formattedPrice(coffee.price),
        subTotal: formattedPrice(coffee.price * coffee.amount),
    }))

    const subTotal = formattedPrice(
        cart.reduce((sumSubTotal, coffee) => {

            return sumSubTotal + (coffee.price * coffee.amount);
        }, 0)
    )

    const shippingPrice = cart.length > 0 ? cart.map((coffee) => ({
        ...coffee,
        shippingPrice: formattedPrice((coffee.price * coffee.amount) * 0.1)
    })) : 0;

    const total = formattedPrice(
        cart.reduce((sumTotal, coffee, shippingPrice: number) => {

            return sumTotal + coffee.price * coffee.amount + shippingPrice
        }, 0)
    )

    function handleCoffeeIncrement(coffee: CoffeeProduct) {
        updateCoffeeAmount({
            coffeeId: coffee.id,
            amount: coffee.amount + 1,
        })
    }

    function handleCoffeeDecrement(coffee: CoffeeProduct) {
        updateCoffeeAmount({
            coffeeId: coffee.id,
            amount: coffee.amount - 1,
        })
    }

    function handleCoffeeRemove(coffeeId: string) {
        removeCoffee(coffeeId)
    }

    return (
        <RightContent>
            <h3>Выбранные кофе</h3>
            <Cart>
                <CartFooter>
                    <div className="cart-list">
                        {
                            cartFormatted.map((coffee) => (
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
                                                <p>УДАЛИТЬ</p>
                                            </button>
                                        </span>
                                    </div>
                                    <h4>₽ {formattedPrice(coffee.price)}</h4>
                                </ContentCardCart>
                            ))
                        }
                    </div>
                    <div>
                        <p>Итого кофе</p>
                        <p>₽ {subTotal}</p>
                    </div>

                    <div>
                        <p>Доставка</p>
                        <p>₽ {Number(shippingPrice)}</p>
                    </div>

                    <div>
                        <h3>Итого</h3>
                        <h3>₽ {total}</h3>
                    </div>
                    <button
                        type="submit"
                        className="submit-btn"
                        disabled={cart.length <= 0}
                    >
                        ПЕРЕЙТИ К ОФОРМЛЕНИЮ
                    </button>
                </CartFooter>
            </Cart>
        </RightContent>
    )
}