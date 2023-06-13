import { BsBank2, BsCurrencyDollar } from "react-icons/bs";
import { CiMoneyBill } from "react-icons/ci"
import { Form, HeaderPaymen, MethodPayment, NavPay } from "../../pages/Order/style";
import { TbCreditCard } from "react-icons/tb";
import { useFormContext } from "react-hook-form";
import { PaymentMethodsButtons } from "../PaymentMethodsButtons";

export const paymentMethods = {
    credit: {
        label: "кредитная карта",
        icon: <TbCreditCard />
    },
    debit: {
        label: "Дебетовая карта",
        icon: <BsBank2 />
    },
    money: {
        label: "наличный",
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
                    <span>Оплата</span>
                </NavPay>
                <p>Оплата производится при доставке, выберите способ оплаты</p>
            </HeaderPaymen>
            <MethodPayment>
                {
                    Object.entries(paymentMethods).map(([key, { label, icon }]) => (
                        <PaymentMethodsButtons
                            key={label}
                            id={key}
                            icon={icon}
                            label={label}
                            value={key}
                            {...register('paymentMethod')}
                        />
                    ))
                }
            </MethodPayment>
            {paymentMethodError && <p className="error">{paymentMethodError}</p>}
        </Form>
    )
}