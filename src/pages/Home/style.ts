import styled from "styled-components";

export const Main = styled.main`
    margin: 0 auto;
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3.375rem;
    padding: 0 1rem;
    margin: 0 auto;
    /* border: 1rem solid red; */

`

export const Cards = styled.div`
    display: grid;
    column-gap: 2rem;
    row-gap: 2.5rem;
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    justify-items: center;
`