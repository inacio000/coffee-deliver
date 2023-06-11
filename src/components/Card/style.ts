import styled from "styled-components";

export const CardItem = styled.div`
  width: 256px;
  height: 310px;
  padding: 0 1.5rem 0.2rem;
  border-radius: 0.357rem 2.25rem;
  background: var(--base-card);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    width: 120px;
    height: 120px;
    margin: -2rem 0 2rem;
  }

  @media (max-width: 300px) {
    width: 200px;
    height: auto;
    padding-bottom: 0.5rem;

    img {
      width: 100px;
      height: 100px;
    }
  }
`;

export const MainCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto 1.5rem;

  h6 {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    
    span {
      padding: 4px 8px;
      font-weight: 700;
      font-size: 0.625rem;
      border-radius: 6.25rem;
      margin-bottom: 1rem;
      text-transform: uppercase;
  
      background: var(--yellow-light);
      color: var(--yellow-dark);
    }
  }

  h4 {
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 14px;
  }
`;

export const FooterCad = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    span {
    font-size: 10px;
    }
  } 

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  @media (max-width: 300px) {
    flex-direction: column;
    gap: 1rem;
  }
`;


export const Price = styled.div`
  line-height: 1.1255rem;
  color: var(--base-text);
  white-space: nowrap;

  span {
    display: flex;
    align-self: flex-end;
    font-size: 0.7rem;
  }

  strong {
    display: flex;
    align-self: flex-end;
    font-weight: 800;
    font-size: 1.4rem;
    line-height: 1.31rem;
  }
`

export const FooterButtons = styled.section`
  width: 72px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--base-button);
  border-radius: 0.375rem;
  gap: 0.5rem;

  button {
    &:disabled > svg {
      cursor: not-allowed;
      opacity: 0.3;
    }
    
    &:not(:disabled):hover {
      background-color: var(--base-hover);
    }
    svg {
      margin-top: 0.3rem;
      color: var(--purple);
      transition: all 0.3s;

      &:hover {
        color: var(--purple-dark);
      }
    }
  }

  input {
    width: 1.25rem;
    height: 1.25rem;
    color: var(--base-title);
    background: transparent;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    appearance: textfield;
    -moz-appearance: textfield;

    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }
`;

export const CartIcon = styled.button`
  width: 38px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0%.5rem;
  border-radius: 0.375rem;
  background: var(--purple-dark);
  transition: all 0.3s;

  &:hover {
    background-color: var(--purple);
  }

  svg {
    color: var(--background);
  }
`;
