import { Dashboard } from "../../components/Dashboard";
import { CardContainer, Cards, Main } from "./style";
import { Card } from "../../components/Card";
import { Coffee } from "../../types";
import { formattedPrice } from "../../util/format";
import { coffees } from "../../coffeeData/cooffees";
import { Section } from "../../components/Section";
import image from "../../../src/assets/images/givecoffe.png"

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
            <Section
                key={image}
                firstContent="У нас лучший кофе"
                secondContent="Даем полную гарантию качества. Вернем деньги, если вам не понравится кофе. Жарим кофе семь дней в неделю, отправляем на следующий день после заказа, чтобы вы получали максимально свежий кофе."
            />
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