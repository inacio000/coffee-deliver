import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3.375rem;
    padding: 0 1rem;
    margin: 0 auto;
`

export const Cards = styled.div`
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(4, 4fr);
`