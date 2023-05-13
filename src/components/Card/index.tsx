import { CardItemn, FooterCad, MainCard, CartIcon, FooterButtons } from "./style";
import {AiOutlinePlus} from "react-icons/ai";
import {AiOutlineMinus} from "react-icons/ai";
import coffeeImage from "../../assets/images/Type=Expresso.png"
import { FaShoppingCart } from "react-icons/fa";
import 'aos/dist/aos.css'

export function Card() {

    return (
        <CardItemn
            data-aos="fade-up"
            
        >
            <img src={coffeeImage} alt="" />

            <MainCard>
                <h6><span>TRADICIONAL</span></h6>
                <h4>Expresso Tradicional</h4>
                <p>O tradicional café feito com água quente e grãos moídos</p>
            </MainCard>

            <FooterCad>
                <p>
                    <span>R$ </span> 
                    <strong>9,90</strong>
                </p>
                <div>
                    <FooterButtons>
                        <button>
                            <AiOutlineMinus/>
                        </button>
                            <span>1</span>   
                        <button>
                            <AiOutlinePlus/>
                        </button>
                    </FooterButtons>
                    <CartIcon to={"/order"}>
                        <FaShoppingCart/>
                    </CartIcon>
                </div>
            </FooterCad>
        </CardItemn>
    )
}