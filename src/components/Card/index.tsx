import { CardItemn, FooterCad, MainCard, CartIcon, FooterButtons, Price } from "./style";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import 'aos/dist/aos.css';
import { ChangeEvent, useState } from "react";
import { useCartCoffee } from "../../hooks/useCart";
import { formattedPrice } from "../../util/format";

export interface CoffeeCardProps {
    coffee: {
        id: string;
        avatar: string;
        typeCoffee: string[];
        name: string;
        description: string;
        priceFormatted: string;
        amount: number;
    }
}

export function Card({ coffee }: CoffeeCardProps) {
    const {  addCoffee } = useCartCoffee();
    const [amountCoffee, setAmountCoffee] = useState(1);
    
    function handleDecrement() {
        setAmountCoffee((stateAmount) => stateAmount - 1);
    }

    function handleIncrement() {
        setAmountCoffee((stateAmount) => stateAmount + 1);
    }

    function handleChangeAmount(event: ChangeEvent<HTMLInputElement>) {
        if (event.target.valueAsNumber > 0) {
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
                <h6>{
                    coffee.typeCoffee.map(type => (
                        <span key={type}>
                            {type}
                        </span>
                    ))
                }
                </h6>
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
                            disabled={amountCoffee <= 1}
                            onClick={handleDecrement}
                        >
                            <AiOutlineMinus />
                        </button>
                        <input 
                            type="text"
                            min={1}
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
