import styled from "styled-components";
import bg from "../../assets/images/Background.png";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  background-image: url(${bg});
  padding: 5rem 1rem;
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 600px;

  .coffee-title {
    margin-bottom: 4.125rem;

    p {
      margin-top: 1rem;
    }
  }
`;

export const RightContent = styled.div``;

export const StepList = styled.ul`
  display: grid;
  column-gap: 0rem;
  row-gap: 1.25rem;
  grid-template-columns: repeat(2, 2fr);

  li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    list-style: none;
  }

  div {
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    border-radius: 50%;
  }

  svg {
    color: var(--icons-color);
  }
`;

export const CartIcon = styled.div`
  background: var(--yellow-dark);
`;

export const PackageIcon = styled.div`
  background: var(--base-text);
`;

export const TimerIcon = styled.div`
  background: var(--yellow);
`;

export const CoffeeIcon = styled.div`
  background: var(--purple);
`;
