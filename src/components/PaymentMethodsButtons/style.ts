import styled from "styled-components";

export const PaymentMethodContainer = styled.div`

  input {
    visibility: hidden;
    appearance: none;
  }

  input:checked + label div {
    background: var(--purple-light);
    border-color: var(--purple);

    &:hover {
      background: var(--purple-light);
    }
  }
`;

export const PaymentInputContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8125rem;
  width: 11.166875rem;
  padding: 1rem;
  border: 1px solid var(--base-button);
  border-radius: 0.375rem;
  background: var(--base-button);
  color: var(--base-text);
  font-size: 0.75rem;
  text-transform: uppercase;

  &:hover {
    background-color: var(--base-hover);
  }

  svg {
    width: 1rem;
    height: 1rem;
    color: var(--purple);
  }

  user-select: none;
`