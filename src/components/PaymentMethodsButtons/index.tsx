import { InputHTMLAttributes, ReactNode, forwardRef } from "react"
import { PaymentInputContent, PaymentMethodContainer } from "./style";

type PaymentMethodsProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode;
  label: string;
}

export const PaymentMethodsButtons = forwardRef<HTMLInputElement, PaymentMethodsProps>(({ id, icon, label, ...props }, ref) =>  {
  return (
    <PaymentMethodContainer>
      <input {...props} name="paymentMethod" id={id} ref={ref} type="radio" />
      <label htmlFor={id}>
        <PaymentInputContent>
          {icon}
          {label}
        </PaymentInputContent>
      </label>
    </PaymentMethodContainer>
  )
})