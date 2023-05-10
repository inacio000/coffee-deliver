import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;

    margin: 0 auto;
    padding: 10rem 1rem;
`;

export const ContentLeft = styled.div`
    width: 568px;

    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    h3 {
        color: var(--yellow-dark);
    }

`;

export const Content = styled.div`
    background: var(--border-color);
    border-radius: 0.357rem 2.25rem;
    padding: 0.1px;
`;

export const Order = styled.div`
    /* width: 568px; */
    background: var(--base-white);
    border-radius: 0.357rem 2.25rem;

    padding: 2.5rem;
    border: 1px solid red;

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
`;

export const Icon= styled.section`
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;

`;