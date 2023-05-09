import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
    border: 1px solid red;
`

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    padding: 2rem 1rem;
    
    div {
        height: 2.5rem; 
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }
`

export const Order = styled(Link)`
    background: var(--yellow-light);
    padding: 0.5rem;
    border-radius: 0.5rem;
    height: 100%;

    span {
        display: none;
    }

    img {
        width: 1.5rem;
    }
`

export const Location = styled.div`
    display: flex;
    align-items: center;
    color: var(--purple-dark);
    background: var(--purple-light);
    border-radius: 0.5rem;
    padding: 0.5rem;
    height: 100%;

    img {
        width: 1.5rem;
    }
`
