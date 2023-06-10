import { BiMap } from "react-icons/bi";
import { Address, Form, FormBody, HeaderForm } from "../../pages/Order/style";
import { Input } from "../Input";
import { useFormContext } from "react-hook-form";

export interface ErrorsType {
  errors: {
      [key: string]: {
          message: string;
      }
  }
}

export function InputsForm() {
  const { register, formState } = useFormContext();

  const { errors } = formState as unknown as ErrorsType;

  return (
    <Form>
      <HeaderForm>
          <Address>
              <BiMap />
              <span>Endereço de Entrega</span>
          </Address>
          <p>Informe o endereço onde deseja receber seu pedido</p>
      </HeaderForm>
      <FormBody>
          <Input 
              id="cpf-input"
              type="text"
              placeholder="CEP"
              {...register('cep')}
              error={errors.cep?.message}
          />
          <Input 
              id="street-input"
              type="text"
              placeholder="Rua"
              {...register('street')}
              error={errors.street?.message}
          />
          <Input 
              id="number-input"
              type="text"
              placeholder="Numero"
              {...register('streetNumber')}
              error={errors.streetNumber?.message}
          />
          <Input 
              id="complement-input"
              type="text"
              placeholder="Complemento"
              {...register('complement')}
              error={errors.complement?.message}
          />
          <Input 
              id="neighborhood-input"
              type="text"
              placeholder="Bairro"
              {...register('neighborhood')}
              error={errors.neighborhood?.message}
          />
          <Input 
              id="city-input"
              type="text"
              placeholder="Cidade"
              {...register('city')}
              error={errors.city?.message}
          />
          <Input 
              id="uf-input"
              type="text"
              placeholder="UF"
              {...register('state')}
              error={errors.state?.message}
          />
      </FormBody>
    </Form>
  )
}