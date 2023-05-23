import styled from "styled-components";

export const ContentCardCart = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2.09375rem;
  margin-bottom: 1.59375rem;
  border-bottom: 2px solid var(--base-button);

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    span {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0.8rem;

      button[type="button"] {
        height: 38px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.4375rem;
        font-size: 0.75rem;
        padding: 0.5rem;
        border-radius: 0.375rem;

        svg {
          color: var(--purple);
        }

        &:hover {
          background-color: var(--base-hover);
        }
      }
    }
  }

  img {
    width: 4rem;
    height: 4rem;
  }

  svg {
    width: 1rem;
    height: 1rem;
    color: var(--purple);
  }

  @media (max-width: 560px) {
    gap: 1.5rem;
  }

  @media (max-width: 410px) {
    display: grid;

    grid-template-columns: repeat(2, auto);
    grid-template-rows: auto;
    gap: 0;

    align-items: center;

    grid-template-areas:
      "avatarCoffee price"
      "avatarCoffee div";
  }

  img {
    grid-area: avatarCoffee;
  }

  div {
    grid-area: div;
  }

  h4 {
    grid-area: price;
  }
`;
