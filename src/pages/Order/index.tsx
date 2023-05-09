import { Card } from "../../components/Card";
import { Dashboard } from "../../components/Dashboard";
import { CardContainer, Cards } from "../Home/style";

export function Order() {
    return (
        <>
             <Dashboard />
            <CardContainer>
                <h3>Nossos Cafés</h3>
                <Cards>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </Cards>
            </CardContainer>
        </>
    )
}