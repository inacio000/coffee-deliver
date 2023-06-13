import { Dashboard } from "../../components/Dashboard";
import { CardContainer, Cards, Main } from "./style";
import { Card } from "../../components/Card";
import { Coffee } from "../../types";
import { formattedPrice } from "../../util/format";
import { coffees } from "../../coffeeData/cooffees";

interface CoffeeFormatted extends Coffee {
    priceFormatted: string;
}

export function Home() {
    const data = coffees.map((coffee) => ({
        ...coffee,
        priceFormatted: formattedPrice(coffee.price),
        amount: Number(coffee.amount)
    }))

    return (
        <Main>
            <Dashboard />
            <CardContainer>
                <h3>Наши кафе</h3>
                <Cards>
                    {
                        data.map((coffee) => (
                            <Card
                                coffee={coffee}
                                key={coffee.id}
                            />
                        ))
                    }
                </Cards>
            </CardContainer>
        </Main>
    )
}