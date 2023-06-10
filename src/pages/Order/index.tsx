import { Container } from "./style";

import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod'
import { FormOrder } from "../../components/FormOrder";
import { CoffeeCartCard } from "../../components/FormOrder/CoffeeCartCard";

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
      
    const newOrderForm = useForm<ConfirmOrderFormData>({ 
        resolver: zodResolver(orderFormSchema),
        defaultValues: {
            cep: '',
            street: '',
            streetNumber: '',
            neighborhood: '',
            complement: '',
            city: '',
            state: '',
            paymentMethod: undefined,
        },
    })

    const { handleSubmit} = newOrderForm;

    // watch('paymentMethod')

    const handleCreateNewOrder = (data: ConfirmOrderFormData) => {
        // const newOrder = {
        //     id: '1',
        //     address: {
        //         cep: data.cep,
        //         street: data.street,
        //         streetNumber: data.streetNumber,
        //         complement: data.complement,
        //         neighborhood: data.neighborhood,
        //         city: data.city,
        //         state: data.state,
        //     },
        //     paymentMethod: data.paymentMethod,
        //     itemOrdered: cart.map(coffee => {
        //         return {
        //             idCoffee: coffee.id.toString(),
        //             nameCoffee: coffee.name,
        //             priceCoffee: coffee.price,
        //             amountCoffee: coffee.amount, 
        //         }
        //     }),
        //     totalItem: Number(total),
        //     shippingPrice,
        //     orderDate: new Date(),
        // }

        // addNewOrder(newOrder)
        // reset()
        console.log(data)
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