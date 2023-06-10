import { BsBank2, BsCurrencyDollar } from "react-icons/bs";
import { CiMoneyBill } from "react-icons/ci"
import { Form, HeaderPaymen, MethodPayment, NavPay } from "../../pages/Order/style";
import { TbCreditCard } from "react-icons/tb";
import { useFormContext } from "react-hook-form";
import { useState } from "react";
import { PaymentMethodsButtons } from "../PaymentMethodsButtons";

export const paymentMethods = {
    credit: {
        label: "Cartão de crédito",
        icon: <TbCreditCard />
    },
    debit: {
        label: "Cartão de débito",
        icon: <BsBank2 />
    },
    money: {
        label: "Money",
        icon: <CiMoneyBill />
    }

}

export function PaymentMethods() {
  const { register, formState: { errors } } = useFormContext();

  const paymentMethodError = errors?.paymentMethod?.message as unknown as string;

  return (
    <Form>
      <HeaderPaymen>
          <NavPay>
              <BsCurrencyDollar />
              <span>Pagamento</span>
          </NavPay>
          <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
      </HeaderPaymen>
      <MethodPayment>
          {
            Object.entries(paymentMethods).map(([key, {label, icon}]) => (
                <PaymentMethodsButtons 
                    key={key}
                    id={key}
                    icon={icon}                
                    label={label}
                    {...register("paymentMethod")}
                />
            ))
          }
      </MethodPayment>
        {paymentMethodError && <p className="error">{paymentMethodError}</p>}
    </Form>
  )
}