import { ContentCardCart } from "./style";
import coffeeImage from "../../assets/images/Type=Expresso.png"
import { FooterButtons } from "../Card/style";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useCartCoffee } from "../../hooks/useCart";
import { useEffect } from "react";
import { api } from "../../services/api";

export function CardCart() {
    const { cart } = useCartCoffee();

    // useEffect(() => {
    //     api.get('coffees')
    //         .then(response => console.log(response.data));
    // }, [])

    return (
        <>
            {
                cart.map(coffe => (
                    <ContentCardCart>
                        <img src={coffeeImage} alt="Coffee image" />
                        <div>
                            <p>Expresso Tradicional</p>
                            <span>
                                <FooterButtons>
                                    <button>
                                        <AiOutlineMinus />
                                    </button>
                                    <span>1</span>
                                    <button>
                                        <AiOutlinePlus />
                                    </button>
                                </FooterButtons>
                                <button type="button">
                                    <RiDeleteBin6Line />
                                    <p>REMOVER</p>
                                </button>
                            </span>
                        </div>
                        <h4>R$ 9,90</h4>
                    </ContentCardCart>
                ))
            }
        </>
    )
}