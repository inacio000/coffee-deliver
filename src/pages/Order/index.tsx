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
    cep: z.string().min(1, 'Введите номер паспорта'),
    street: z.string().min(1, 'информировать улицу'),
    streetNumber: z.string().min(1, 'Введите номер дома'),
    complement: z.string().optional(),
    neighborhood: z.string().optional(),
    city: z.string().min(1, 'Введите город'),
    state: z.string().min(1, 'Введите Область'),
    paymentMethod: z.nativeEnum(PaymentMethods, {
        errorMap:() => {
            return { message: "Выберите способ оплаты"}
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