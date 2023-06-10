import { Content, LeftContent } from "../../pages/Order/style";
import { InputsForm } from "./InputsForm";
import { PaymentMethods } from "./PaymentMethods";

export function FormOrder() {
   
    return (
        <>
            <LeftContent>
                <h3>Complete seu pedido</h3>
                    <Content>
                        <InputsForm />
                        <PaymentMethods />
                    </Content>
            </LeftContent>
        </>
    )
}