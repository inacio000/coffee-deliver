import styled from "styled-components";

export const Main = styled.main`
  margin: 0 auto;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.375rem;
  padding: 2rem 1rem;
  margin: 0 auto;

  h3 {
    font-size: 32px;
  }

  @media (max-width: 560px) {
    h3 {
      font-size: 26px;
    }
  }
`;

export const Cards = styled.div`
  display: grid;
  column-gap: 2rem;
  row-gap: 2.5rem;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  justify-items: center;
`;
