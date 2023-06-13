import { Dashboard } from "../../components/Dashboard";
import { CardContainer, Cards, Main } from "./style";
import { Card } from "../../components/Card";
import { Coffee } from "../../types";
import { useEffect, useState } from "react";
import { formattedPrice } from "../../util/format";
import { api } from "../../services/api";

interface CoffeeFormatted extends Coffee {
    priceFormatted: string;
}

export function Home() {
    const [coffees, setCoffees] = useState<CoffeeFormatted[]>([]);

    useEffect(() => {
        async function loadCoffees() {
            const response = await api.get<Coffee[]>('/coffees');

            const data = response.data.map((coffee) => ({
                ...coffee,
                priceFormatted: formattedPrice(coffee.price),
            }))

            setCoffees(data);
        }

        loadCoffees();
    }, [])

    return (
        <Main>
            <Dashboard />
            <CardContainer>
                <h3>Наши кафе</h3>
                <Cards>
                    {
                        coffees.map((coffee) => (
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