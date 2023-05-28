import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  display: flex;
  justify-content: space-between;

  margin: 0 auto;
  padding: 10rem 1rem;

  .deliver {
    display: flex;
    align-items: flex-end;
  }

  @media (max-width: 930px) {
    img {
      width: 400px;
    }
  }

  @media (max-width: 820px) {
    img {
      width: 300px;
    }
  }

  @media (max-width: 700px) {
    width: fit-content;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    img {
      max-width: 300px;
      width: 500px;
    }
  }
`;

export const ContentLeft = styled.div`
  width: 568px;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  h3 {
    color: var(--yellow-dark);
  }

  @media (max-width: 700px) {
    max-width: 390px;

    div:first-child {
      padding-left: 1.5rem;
    }
  }
`;

export const Content = styled.div`
  background: var(--border-color);
  border-radius: 0.357rem 2.25rem;
  padding: 0.1rem;
`;

export const Order = styled.div`
  background: var(--base-white);
  border-radius: 0.357rem 2.25rem;

  padding: 2.5rem;

  ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    li {
      display: flex;
      align-items: center;
      list-style: none;
      gap: 0.5rem;

      svg {
        color: var(--base-white);
      }
      .location {
        background-color: var(--purple);
      }

      .timer {
        background: var(--yellow);
      }

      .money {
        background: var(--yellow-dark);
      }

      span {
        font-weight: 800;
      }
    }
  }

  @media (max-width: 930px) {
    padding: 2rem;
  }
`;

export const Icon = styled.section`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;
