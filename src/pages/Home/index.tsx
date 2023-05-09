import { Dashboard } from "../../components/Dashboard";
import { CardContainer, Cards } from "./style";
import { Card } from "../../components/Card";
export function Home() {
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
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </Cards>
            </CardContainer>
        </>
    )
}