import { Content } from "./style";
import coffeeImage from "../../assets/images/Type=Expresso.png"
import { FooterButtons } from "../Card/style";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

export function CardCart() {
    return (
        <Content>
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
        </Content>
    )
}