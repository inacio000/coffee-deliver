import { Dashboard } from "../../components/Dashboard";
import { CardContainer, Cards, Main } from "./style";
import { Card } from "../../components/Card";

export function Home() {
    return (
        <Main>
            <Dashboard />
            <CardContainer>
                <h3>Nossos Cafés</h3>
                <Cards>
                    <Card />
                </Cards>
            </CardContainer>
        </Main>
    )
}