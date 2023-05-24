import { CardItemn, FooterCad, MainCard, CartIcon, FooterButtons, Price } from "./style";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import 'aos/dist/aos.css';
import { ChangeEvent, useState } from "react";
import { useCartCoffee } from "../../hooks/useCart";

export interface CoffeeCardProps {
    coffee: {
        id: number;
        avatar: string;
        typeCoffee: string[];
        name: string;
        description: string;
        priceFormatted: string;
        amount: number;
    }
}

export function Card({ coffee }: CoffeeCardProps) {
    const { addCoffee } = useCartCoffee();
    const [amountCoffee, setAmountCoffee] = useState(0);

    function handleDecrement() {
        amountCoffee - 1 >= 0 && setAmountCoffee(amountCoffee - 1);
    }

    function handleIncrement() {
        amountCoffee + 1 <= 10 && setAmountCoffee(amountCoffee + 1);
    }

    function handleChangeAmount(event: ChangeEvent<HTMLInputElement>) {
        if (event.target.valueAsNumber > 0 && event.target.valueAsNumber <= 10) {
            setAmountCoffee(event.target.valueAsNumber)
        }
    }

    return (
        <CardItemn
            key={coffee.id}
            data-aos="fade-up"
        >
            <img src={coffee.avatar} alt={coffee.name} />

            <MainCard>
                <h6><span>{coffee.typeCoffee}</span></h6>
                <h4>{coffee.name}</h4>
                <p>{coffee.description}</p>
            </MainCard>

            <FooterCad>
                <Price>
                    <span>R$</span><strong>{coffee.priceFormatted}</strong>
                </Price>
                <div>
                    <FooterButtons>
                        <button
                            onClick={handleDecrement}
                        >
                            <AiOutlineMinus />
                        </button>
                        <input 
                            type="text"
                            min={0}
                            max={10}
                            onChange={handleChangeAmount}
                            value={amountCoffee}
                        />
                        <button
                            onClick={handleIncrement}
                        >
                            <AiOutlinePlus />
                        </button>
                    </FooterButtons>
                    <CartIcon
                        type="button"
                        onClick={() => addCoffee(coffee.id, amountCoffee)}
                    >
                        <FaShoppingCart />
                    </CartIcon>
                </div>
            </FooterCad>
        </CardItemn>            
    )
}
