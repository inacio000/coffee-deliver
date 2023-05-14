import styled from "styled-components";

interface FormProps {
  svgColor: string;
}

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 0 auto;
  padding: 10rem 1rem;

  h3 {
    margin: 0.9rem 0;
    font-size: 1.5rem;
  }

  svg {
    color: var(--yellow-dark);
  }

  input {
    padding: 0.7rem;
    background: var(--base-input);
    border-radius: 0.25rem;
    border: 1px solid var(--base-button);

    &:is(:focus) {
      outline: 1px var(--yellow) solid;
    }

    &::placeholder {
      color: var(--base-label);
    }
  }

  @media (max-width: 1140px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 560px) {
    flex-direction: column;
    gap: 5rem;

    h3 {
      font-size: 1.3rem;
      padding-left: 1rem;
    }
  }

  @media (max-width: 410px) {
    padding: 10rem 0;
  }
`;

export const LeftContent = styled.div`
  width: 640px;

  @media (max-width: 670px) {
    width: fit-content;
  }

  @media (max-width: 410px) {
    width: 100%;
  }
`;

export const Content = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

export const Form = styled.form`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  background: var(--base-card);
  border-radius: 0.375rem;

  @media (max-width: 300px) {
    padding: 2.5rem 0.875rem;
  }
`;

export const FormBody = styled.div`
  display: grid;
  gap: 0.75rem;
  justify-content: center;
  grid-template-rows: auto;
  grid-template-columns: minmax(auto-fit, 1fr);

  grid-template-areas:
    "CpfInput auto auto"
    "StreetInput StreetInput StreetInput"
    "NumberInput ComplementInput ComplementInput"
    "NeighborhoodInput CityInput UfInput";

  .cpf-input {
    grid-area: CpfInput;
  }
  .street-input {
    grid-area: StreetInput;
  }
  .number-input {
    grid-area: NumberInput;
  }
  .complement-input {
    grid-area: ComplementInput;
  }
  .neighborhood-input {
    grid-area: NeighborhoodInput;
  }
  .city-input {
    grid-area: CityInput;
  }
  .uf-input {
    grid-area: UfInput;
  }

  @media (max-width: 670px) {
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: auto;

    grid-template-areas:
      "NeighborhoodInput NeighborhoodInput"
      "CpfInput StreetInput"
      "NumberInput CityInput "
      "ComplementInput UfInput";

    input {
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 560px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const HeaderForm = styled.div`
  display: flex;
  flex-direction: column;

  p {
    padding-left: 1.5rem;
    font-size: 0.8rem;
  }
`;

export const Address = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    color: var(--base-subtitle);
  }
`;

export const MethodPayment = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    display: flex;
    align-items: center;
    gap: 0.8125rem;
    background: var(--base-button);
    width: 11.166875rem;
    padding: 1rem;
    border: none;
    border-radius: 0.375rem;

    svg {
      width: 1rem;
      height: 1rem;
      color: var(--purple);
    }
  }

  @media (max-width: 670px) {
    display: grid;

    gap: 0.75rem;
    align-content: center;
    grid-template-rows: auto;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 560px) {
    grid-template-columns: repeat(auto-fit, minmax(50%, 1fr));
    justify-items: center;

    button {
      width: 100%;
      justify-content: center;
    }
  }
`;

export const HeaderPaymen = styled.div`
  display: flex;
  flex-direction: column;

  p {
    padding-left: 1.5rem;
    font-size: 0.8rem;
  }

  svg {
    color: var(--purple);
  }
`;

export const NavPay = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    color: var(--base-subtitle);
  }
`;

export const RightContent = styled.div`
  width: 448px;
  height: 498px;

  @media (max-width: 1140px) {
    width: 640px;
  }

  @media (max-width: 670px) {
    max-width: 540px;
  }

  @media (max-width: 560px) {
    width: fit-content;
    height: fit-content;
  }

  @media (max-width: 410px) {
    width: 100%;
  }
`;

export const Cart = styled.div`
  padding: 2.5rem;
  border-radius: 0.357rem 2.25rem;
  background: var(--base-card);

  @media (max-width: 560px) {
    width: fit-content;
  }

  @media (max-width: 410px) {
    width: 100%;

    border-radius: 0;
  }

  @media (max-width: 300px) {
    padding: 2.5rem 0.875rem;
  }
`;

export const CartFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    display: flex;
    justify-content: space-between;
  }

  a {
    width: 100%;
    text-align: center;
    background: var(--yellow);
    padding: 0.75rem;
    border-radius: 0.25rem;
    color: var(--base-white);
    text-decoration: none;
  }

  h3 {
    padding: 0;
  }
`;

// Inputs
export const CpfInput = styled.input`
  /* width: 12.5rem; */
`;

export const StreetInput = styled.input`
  /* width: 100%; */
`;

export const NumberInput = styled.input`
  /* width: 12.5rem; */
`;

export const ComplementInput = styled.input`
  /* width: 21.65rem; */
`;

export const Neighborhood = styled.input`
  /* width: 12.5rem; */
`;

export const CityInput = styled.input`
  /* width: 17.25rem; */
`;

export const UfInput = styled.input`
  /* width: 3.75rem; */
`;