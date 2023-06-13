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
                    <span>Адрес доставки</span>
                </Address>
                <p>Введите адрес, по которому вы хотите получить свой заказ</p>
            </HeaderForm>
            <FormBody>
                <Input
                    id="cpf-input"
                    type="text"
                    placeholder="Номер паспорта"
                    {...register('cep')}
                    error={errors.cep?.message}
                />
                <Input
                    id="street-input"
                    type="text"
                    placeholder="Улица"
                    {...register('street')}
                    error={errors.street?.message}
                />
                <Input
                    id="number-input"
                    type="text"
                    placeholder="номер дома"
                    {...register('streetNumber')}
                    error={errors.streetNumber?.message}
                />
                <Input
                    id="complement-input"
                    type="text"
                    placeholder="Дополнение"
                    {...register('complement')}
                />
                <Input
                    id="neighborhood-input"
                    type="text"
                    placeholder="Район"
                    {...register('neighborhood')}
                />
                <Input
                    id="city-input"
                    type="text"
                    placeholder="Город"
                    {...register('city')}
                    error={errors.city?.message}
                />
                <Input
                    id="uf-input"
                    type="text"
                    placeholder="Область"
                    {...register('state')}
                    error={errors.state?.message}
                />
            </FormBody>
        </Form>
    )
}