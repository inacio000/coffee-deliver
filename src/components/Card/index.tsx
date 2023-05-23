import { CardItemn, FooterCad, MainCard, CartIcon, FooterButtons } from "./style";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import coffeeImage from "../../assets/images/Type=Expresso.png";
import { FaShoppingCart } from "react-icons/fa";
import 'aos/dist/aos.css';
import { useCartCoffee } from "../../hooks/useCart";
import { formattedPrice } from "../../util/format";

interface CartItemsCoffeeAmount {
    [key: number]: number;
}

export function Card() {
    const { addCoffee, removeCoffee, cart } = useCartCoffee();
    const cartCoffeeAmount = cart.reduce((sumAmount, coffee) => {
        const newSumCoffeeAmount = { ...sumAmount }
        newSumCoffeeAmount[coffee.id] = coffee.amount

        return newSumCoffeeAmount;
    }, {} as CartItemsCoffeeAmount)

    // const cartFormatted = cart.map(coffee => ({
    //     ...coffee,
    //     priceFormatted: formattedPrice(coffee.price),
    //     subTotal: formattedPrice(coffee.price * coffee.amount)
    // }))

    function handleAddCoffee(id: number) {
        addCoffee(id)
    }

    function handleRemoveCoffee(id: number) {
        removeCoffee(id);
    }

    return (
        <>
            {
                cart.map(coffee => (
                    <CardItemn
                        key={coffee.id}
                        data-aos="fade-up"
                    >
                        <img src={coffeeImage} alt={coffee.typeCoffee} />

                         <MainCard>
                             <h6><span>{coffee.typeCoffee}</span></h6>
                             <h4>{coffee.name}</h4>
                             <p>{coffee.description}</p>
                         </MainCard>

                         <FooterCad>
                             <p>
                                 <strong>{formattedPrice(coffee.price)}</strong>
                             </p>
                             <div>
                                 <FooterButtons>
                                     <button
                                        onClick={() => handleRemoveCoffee(coffee.id)}
                                     >
                                         <AiOutlineMinus />
                                     </button>
                                     <span>{cartCoffeeAmount[coffee.id] || 0}</span>
                                     <button
                                        onClick={() => handleAddCoffee(coffee.id)}
                                     >
                                         <AiOutlinePlus />
                                     </button>
                                 </FooterButtons>
                                 <CartIcon to={"/order"}>
                                     <FaShoppingCart />
                                 </CartIcon>
                             </div>
                         </FooterCad>
                    </CardItemn>
                ))
            }
        </>
    )
}
