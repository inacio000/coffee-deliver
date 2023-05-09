import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardItemn = styled.div`
    width: 256px;
    height: 300px;
    padding: 0 1.5rem 0.2rem;
    border-radius: 0.357rem 2.25rem;
    background: var(--base-card);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    img {
        width: 120px;
        margin: -2rem 0 1rem;
    }
`

export const MainCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto 1.5rem;

    h6 {
        width: 81px;
        height: 21px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 6.25rem;
        margin-bottom: 1rem;

        background: var(--yellow-light);
        

        span {
            font-size: 10px;
            font-weight: 700;
            color: var(--yellow-dark);
        }
    }

    h4 {
        margin-bottom: 0.5rem;
    }

    p {
        font-size: 14px;
    }
`

export const FooterCad = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p > span {
        font-size: 8px;
    }

    div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
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
        border: none;
        background: var(--base-button);

        svg {
            color: var(--purple);
        }
    }
`

export const CartIcon = styled(Link)`
    width: 38px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0%.5rem;
    border-radius: 0.375rem;
    background: var(--purple-dark);

  svg {
    color: var(--background);
  }
`;