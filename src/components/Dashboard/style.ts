import styled from "styled-components";
import background from "../../assets/images/Background.png";
import verticalBackground from "../../assets/images/bg-vertical.png";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  margin-top: 10rem;

  background: url(${background}) no-repeat top center/cover;
`;

export const Content = styled.div`
  width: 1440px;
  display: flex;
  justify-content: space-between;
  padding: 0rem 1rem 5rem;

  @media (max-width: 1030px) {
    text-align: center;
    align-items: center;
    flex-direction: column;
  }

  @media (max-width: 570px) {
    padding-bottom: 2.5rem;
  }
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 600px;

  .coffee-title {
    margin-bottom: 3rem;

    p {
      margin-top: 1rem;
    }
  }

  img {
    width: 200px;
    display: none;
  }

  @media (max-width: 1030px) {
    margin-bottom: 2rem;
  }

  @media (max-width: 570px) {
    .coffee-title {
      margin-bottom: 2rem;
    }

    .coffee-main {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    img {
      display: block;
    }
  }

  @media (max-width: 500px) {
    .coffee-main {
      flex-direction: column;
      gap: 1rem;
    }

    .coffee-title {
      h1 {
        font-size: 32px;
      }
    }
  }
`;

export const RightContent = styled.div`
  @media (max-width: 570px) {
    img {
      display: none;
      width: 400px;
    }
  }
`;

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

  @media (max-width: 570px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 320px) {
    row-gap: 1.5rem;

    li > p {
      font-size: 85%;
    }
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
