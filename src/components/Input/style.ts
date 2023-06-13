import styled, { css } from "styled-components";

interface InputProps {
  error: boolean;
}

export const InputElements = styled.div<InputProps>`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  position: relative;

  border-color: red;

  > p {
    font-size: 0.75rem;
    color: var(--base-error);
  }

  ${({ error }) =>
    error &&
    css`
      input:is(:focus) {
        outline: 1px red solid;
      }
    `}
`;

export const InputStyle = styled.input`
  padding: 0.7rem;
  background: var(--base-input);
  border-radius: 0.25rem;
  border: 1px solid var(--base-button);
  outline: none;

  &:is(:focus) {
    outline: 1px var(--yellow) solid;
  }

  &::placeholder {
    color: var(--base-label);
  }
`;

export const OptionalText = styled.p`
  font-size: 0.75rem;
  color: var(--base-label);
  font-style: italic;
  margin-right: 0.75rem;

  position: absolute;
`;
