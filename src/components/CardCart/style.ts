import styled from "styled-components";

export const Content = styled.div`
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
`;