import { Container } from "./style";

import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod'
import { FormOrder } from "../../components/FormOrder";
import { CoffeeCartCard } from "../../components/FormOrder/CoffeeCartCard";
import { useNavigate } from "react-router-dom";
import { useCartCoffee } from "../../hooks/useCart";

enum PaymentMethods {
    credit = "credit",
    debit = "debit",
    money = "money",
}

const orderFormSchema = z.object({
    cep: z.string().min(1, 'Informe o CEP'),
    street: z.string().min(1, 'Informe a rua'),
    streetNumber: z.string().min(1, 'Informe o número para entrega'),
    complement: z.string().optional(),
    neighborhood: z.string().min(1, 'Informe o bairro'),
    city: z.string().min(1, 'Informe a cidade'),
    state: z.string().length(2, 'Informe o estado'),
    paymentMethod: z.nativeEnum(PaymentMethods, {
        errorMap:() => {
            return { message: "Infore o método de pagamento"}
        }
    })
})

export type NewOrderFormData = z.infer<typeof orderFormSchema>;

type ConfirmOrderFormData = NewOrderFormData;

export function Order() {
    const { clearCart } = useCartCoffee()
      
    const newOrderForm = useForm<ConfirmOrderFormData>({ 
        resolver: zodResolver(orderFormSchema)
    })

    const navigate = useNavigate();

    const { handleSubmit} = newOrderForm;

    const handleCreateNewOrder = (data: ConfirmOrderFormData) => {
        navigate("/deliver", {
            state: data,
        });

        clearCart();
    }

    return (
        <FormProvider {...newOrderForm}>
            <Container
                onSubmit={handleSubmit(handleCreateNewOrder)}
            >
                <FormOrder />  
                <CoffeeCartCard />             
            </Container>
        </FormProvider>
    )
}