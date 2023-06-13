import { InputHTMLAttributes, forwardRef } from "react";
import { OptionalText, InputElements, InputStyle } from "./style";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(({ error, id, ...props }, ref) => {
  return (
    <InputElements id={id} error={!!error}>
      <InputStyle {...props} ref={ref} />
      {error && <p>{error}</p>}
    </InputElements>
  )
})